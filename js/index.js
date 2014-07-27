// 模仿win8 Metro
(function($){
	
	$(function(){
		var info = $('#info');
		var menu = $('.menu');
		menu.delegate('li', 'click', function(e){			
			var that = $(this);
			var a = that.find('a');
			var href = a.attr('href');
			try{
				// 让选项框脱离
				var offset = that.position();
				that.css({
					'position': 'absolute',
					'top': offset.top + 'px',
					'left': offset.left + 'px'
				});
				// 展开选项
				that.animate({
					'left': '0px',
					'top': '0px',
					'width': that.parent().parent().css('width'),
					'height': that.parent().parent().css('height')
				}, 'fast', 'swing', function(){
					// 展开1秒后
					var sub = that.find('li');
					setTimeout(function(){
						if (sub.length) {
							// 返回函数
							var head = $('#header #title');
							var backBtn = $('#back');
							var back = function() {
								// 恢复子选项并回填原选项
								sub.hide();
								that.find('ul').append(sub);
								that.prevAll('li').show();
								that.nextAll('li').show();
								head.html('SPRABBIT');
								backBtn.hide();
								that.animate({
									'top': offset.top + 'px',
									'left': offset.left + 'px',
									'width': '160px',
									'height': '160px'
								}, 'fast', 'swing', function() {
									that.css({
										'top': '0px',
										'left': '0px',
										'position': 'static'
									});
								});
							};	
							// 若有子选项，隐藏当前选项，显示子选项
							head.text(that.find('span').text());
							backBtn.one('click', back);
							backBtn.show();
							sub.show();
							that.prevAll('li').hide();
							that.nextAll('li').hide();
							that.after(sub);
							that.animate({
								'width': '520px',
								'height': '520px'
							}, 'fast', 'swing');
						} else {
							window.location = href;
						}
					}, 1000);
				});
			} catch(ex) {
				window.location = href;
			}
		});
		menu.delegate('li', 'mouseenter', function(e){
			var that = $(this);
			var a = that.find('a');
			info.html(a.html());
		});
		menu.delegate('li', 'mouseleave', function(e){
			var that = $(this);
			var a = that.find('a');
			info.html('');
		});
	});
})(jQuery);
