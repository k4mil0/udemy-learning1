$(document).ready(function(){
	var errors = "";
	if(typeof jQuery == undefined){
		alert("change sth");
	}
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function isNumber(number){
		var regex = /[0-9 -()+]+$/;
		return regex.test(number);
	}
	function isPassword(password){
		var regex = /^[A-Za-z0-9\d=!\-@._*]+$/;
		return regex.test(password);
	}
	$("#lastinput").click(function(event){
		if($("#email").val() == ""){
			errors += "blank email <br>";
		}
		else if(isEmail($("#email").val()) == false){
			errors += "email <br>";
		}
		if($("#phone").val() == ""){
			errors += "blank phone <br>";
		}
		else if(isNumber($("#phone").val()) == false){
			errors += "phone <br>";
		}
		if($("#password").val() == ""){
			errors += "blank password <br>";
		}
		else if(isPassword($("#password").val()) == false){
			errors += "password <br>";
		}
		if((errors != "") && ($("#blank").html() == "")){
			$("#blank").html(errors);
			return false;
		}
		if((isEmail($("#email").val()== true)) && (isNumber($("#phone").val() == true)) && (isPassword($("#password").val() == true))){
			$("#blank").remove();
		}
	});	
});