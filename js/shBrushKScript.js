;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'do if else true false for to downto while break case continue default switch case';
		
		var property = 'click scroll_delta clear position position_x position_y content box name layer padding background_color width height x y layer rotation_center_x rotation_center_y word_space line_space color font weight size src background_image picture fill_mode position_mode time replay component mix_mode target trans rotation effect level effect_tex tag row col fps display transparency background_x background_y background_fill_mode on_click background_position_mode on_dclick on_up on_down on_rclick on_rdclick on_rup on_rdown on_mclick on_mdclick on_mup on_mdown on_scroll_up on_scroll_down on_mouse can_skip on_mouse_in on_mouse_out catch_click catch_dclick catch_up catch_down catch_rclick catch_rdclick catch_rup catch_rdown catch_mclick catch_mdclick catch_mup catch_mdown catch_scroll_up catch_scroll_down father effect_front effect_front_tex effect_front_level effect_back effect_back_tex effect_back_level speed next_line_src next_line_row next_line_col next_line_fps next_page_src next_page_row next_page_col next_page_fps fullscreen resolution_width resolution_height effect_src scroll_position scroll_position_delta max_item direction file mix_mode_src video loop loop_begin control trans_src sound mute volume flip inherit rewrite pop_up italic';

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments			
			{ regex: /(0x[0-9A-Fa-f]+|[0-9.]+)/gm,					css: 'constants'},
			{ regex: /@[^(){};]*/gm,							  	css: 'functions'},
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' },	
			{ regex: new RegExp(this.getKeywords(property), 'gm'),	css: 'properties' },			
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['ks', 'kscript', 'sps'];

	SyntaxHighlighter.brushes.KScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
