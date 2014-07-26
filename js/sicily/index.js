
(function($){
	
	textNum = 6;
		
	function fadeinSicily(){
		$('#sicily').fadeTo(2000, 0.95, fadeoutSicily);
	}
	
	function fadeoutSicily(){
		$('#sicily').fadeTo(3000, 0, fadeinSicily);
	}
		
	function fadeoutText(){	
		$('#text_box').fadeTo(1000, 0, fadeinText);
		if(textNum == 0 || textNum == 6) {
			$('#sicily_logo').fadeTo(500, 0);
		}		
	}
	
	function fadeinText(){
		changeText();
		$('#text_box').fadeTo(1000, 1).fadeTo(2000, 1, fadeoutText);
		$('#sicily_logo').fadeTo(500, 1);	
	}
	
	function changeText()
	{
		switch(textNum)
		{
			case 0:
				$('#text_box').html("<h2>梦想与现实，矛盾而统一</h2>");		
				break;				
			case 1:
				$('#text_box').html("<h2>他的世界仍蕴含希望，她的世界已分崩离析</h2>");
				break;					
			case 2:
				$('#text_box').html("<h2>在斗争与拼搏中重拾梦想，在离别与遗忘中沉沦虚幻</h2>");
				break;					
			case 3:
				$('#text_box').html("<h2>0与1构成的幻想乐章，假与真编织的虚实童话</h2>");
				break;
			case 4:
				$('#text_box').html("<h2>是摆脱束缚勇敢向前，还是感叹命运聊以自慰</h2>");
				break;				
			case 5:
				$('#text_box').html("<h2>他（你），将作何选择</h2>");
				break;	
			case 6:
				$('#text_box').html("<img src='../images/sicily_logo_m.png' alt='sicily'></img>");						
				break;
		}
		
		textNum++;
		
		if(textNum > 6)
		{
			textNum = 0;
		}
	}
	
	$(function(){		
		fadeinText();
		fadeinSicily();	
	});
})(jQuery);
