// JavaScript Document

(function($){
	
	function playOP(e){
		stop();
		$("#player").html("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase=' http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='250' height='32'><param name='allowScriptAccess' value='sameDomain' /><param name='movie' value=' http://l.5sing.com/player.swf?songtype=yc&songid=1338966' /><param name='quality' value='high' /><param name='bgcolor' value='#ffffff' /><embed src=' http://l.5sing.com/player.swf?songtype=yc&songid=1338966' quality='high' bgcolor='#ffffff' width='250' height='32' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage=' http://www.macromedia.com/go/getflashplayer' /></object>");		
		$(this).addClass('playing');
		$(this).unbind('click', playOP);
		$(this).bind('click', stop);
	}

	function playED(e){
		stop();
		$("#player").html("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase=' http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0' width='250' height='32'><param name='allowScriptAccess' value='sameDomain'><param name='movie' value=' http://l.5sing.com/player.swf?songtype=yc&songid=1145495'><param name='quality' value='high'><param name='bgcolor' value='#ffffff' /><embed src=' http://l.5sing.com/player.swf?songtype=yc&songid=1145495' quality='high' bgcolor='#ffffff' width='250' height='32' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage=' http://www.macromedia.com/go/getflashplayer' /></object>");		
		$(this).addClass('playing');
		$(this).unbind('click', playED);
		$(this).bind('click', stop);
	}
	
	function stop(e){
		$("#player").html('');
		$('.cd').removeClass('playing');
		$('.cd1').unbind('click', stop);
		$('.cd1').unbind('click', playOP);
		$('.cd1').bind('click', playOP);
		$('.cd2').unbind('click', stop);
		$('.cd2').unbind('click', playED);
		$('.cd2').bind('click', playED);
	}
	
	$(function(){
		$('.cd1').bind('click', playOP);
		$('.cd2').bind('click', playED);
	});
})(jQuery);

