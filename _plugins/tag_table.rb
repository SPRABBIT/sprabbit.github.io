require 'csv'

module Jekyll  
  class TableTag < Liquid::Tag
    
    MATCHER = /([\w-]+)\s*=\s*(?:"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|([\w\.-]+))/
    
    def initialize(tag_name, markup, tokens)
      super
      @file, @params = markup.strip.split(' ', 2);
    end
    
    def parse_params(context)
      validate_syntax

      params = {}
      markup = @params

      while match = MATCHER.match(markup) do
        markup = markup[match.end(0)..-1]

        value = if match[2]
          match[2].gsub(/\\"/, '"')
        elsif match[3]
          match[3].gsub(/\\'/, "'")
        elsif match[4]
          context[match[4]]
        end

        params[match[1]] = value
      end
      params
    end
    
    # ensure the entire markup string from start to end is valid syntax, and params are separated by spaces
    def validate_syntax
      full_matcher = Regexp.compile('\A\s*(?:' + MATCHER.to_s + '(?=\s|\z)\s*)*\z')
      unless @params =~ full_matcher
        raise SyntaxError.new <<-eos
Invalid syntax for include tag:

  #{@params}

Valid syntax:

  {% include file.ext param='value' param2="value" %}

eos
      end
    end

    def render(context)
      includes_dir = File.join(context.registers[:site].source, '_tables')
      
      if File.symlink?(includes_dir)
        return "Includes directory '#{includes_dir}' cannot be a symlink"
      end
      
      if @file !~ /^[a-zA-Z0-9_\/\.-]+$/ || @file =~ /\.\// || @file =~ /\/\./
        return "Include file '#{@file}' contains invalid characters or sequences"
      end
      
      Dir.chdir(includes_dir) do
        choices = Dir['**/*'].reject { |x| File.symlink?(x) }
        if choices.include?(@file)
          result = ""
          
          CSV.foreach(@file) do |row|
            rowText = ""
            row.each do |cell|
              rowText += "<td>#{cell}</td>"
            end
            result += "<tr>#{rowText}</tr>" 
          end
          
          return "<table>#{result}</table>"
        else
          "table file '#{@file}' not found in _tables directory"
        end
      end
    end    
  end  
end

Liquid::Template.register_tag('table', Jekyll::TableTag)