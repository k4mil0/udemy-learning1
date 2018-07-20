if(typeof jQuery == undefined){
  alert("script is undefined");
}
$("document").ready(function(){
  $("#stripes").click(function(){
    if($("#menu1").is(":hidden")){
      $("#menu1").fadeIn("slow");
    }
    else{
      $("#menu1").fadeOut("slow");
    }
  });
  $(window).resize(function(){
    if($(window).width() > 1300)
    $("#menu1").hide();
  });
  $(".reasons").click(function(){
    $(this).fadeut("slow");
  });
});
$("#lastinput").click(function(){
	alert("Hi!");
});