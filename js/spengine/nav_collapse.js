$(function() {
	var as = $('.sidebar li a');
	for(var i = 0; i < as.length; i++) {
		var a = $(as[i]);
		var href = a.attr('href');
		var location = window.location.href;
		if(location.indexOf(href) >= 0){
			a.parents('li').addClass('active');
			a.parents().show();
			a.next().show();
			break;
		}
	}
	$('table').addClass('table table-hover table-bordered')
});


