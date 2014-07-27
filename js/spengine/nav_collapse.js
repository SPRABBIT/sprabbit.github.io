$(function() {
	$('#left>ul').hide();
	$('#left>ul ul').hide();
	$('#left li').each(function(index) {
		var self = $(this);
		var link = self.find('a').attr('href');
		var pathname = location.pathname;
		var isCurPath = false;
		if (pathname == '/spengine/' + link) {
			isCurPath = true;
		} else if (link === 'index.html' && pathname === '/spengine/') {
			isCurPath = true;
		}
		if (isCurPath) {
			self.addClass('cur_path');
			self.parents('ul').show();
			self.children('ul').show();
		}
	});
	$('#left>ul').show();
});


