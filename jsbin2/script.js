var numberOfHidden =  $("textarea:hidden").length;
$(document).ready( function(){
	$("#parent").click(function(){
		$("#positionable").toggle();
	});
	
	$("#html").click(function(){
		$("#html1").toggle();
		if($("#html1").css("display") == 'none'){
			numberOfHidden++;
			
			alert(5-numberOfHidden);
		}
		else{
			numberOfHidden--;
			alert(5-numberOfHidden);
		}
	});
	$("#css").click(function(){
		$("#css1").toggle();
		if($("#css1").css("display") == 'none'){
			numberOfHidden++;
			
			alert(5-numberOfHidden);
		}
		else{
			numberOfHidden--;
			alert(5-numberOfHidden);
		}
	});
	$("#javascript").click(function(){
		$("#js1").toggle();
		if($("#js1").css("display") == 'none'){
			numberOfHidden++;
			
			alert(5-numberOfHidden);
		}
		else{
			numberOfHidden--;
			alert(5-numberOfHidden);
		}
	});
	$("#console").click(function(){
		$("#console1").toggle();
		if($("#console1").css("display") == 'none'){
			numberOfHidden++;
			
			alert(5-numberOfHidden);
		}
		else{
			numberOfHidden--;
			alert(5-numberOfHidden);
		}
	});
	$("#output").click(function(){
		$("#output1").toggle();
		if($("#output1").css("display") == 'none'){
			numberOfHidden++;
			alert(5-numberOfHidden);
		}
		else{
			numberOfHidden--;
			alert(5-numberOfHidden);
		}
	});
	$(function(){
	$("textarea").each(function(){
		if(numberOfHidden != 5)
			$(this).css("width", width/(5-numberOfHidden));
	});
});
});

var height = innerHeight - 40; 
var width = innerWidth - 10; 
var element = ["html1", "css1", "js1", "console1", "output1"];
//document.getElementById("html1").style.height = height_html + "px";
$("textarea").css("height", height);
alert(5-numberOfHidden);
