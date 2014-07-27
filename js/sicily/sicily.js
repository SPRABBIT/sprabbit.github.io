// 菜单点击修正

(function($){	
	$(function(){
		$('#menu li').click(function(){
			var that = $(this);
			var a = that.find('a');
			var href = a.attr('href');
			window.location = href;
		});
	});
})(jQuery);
