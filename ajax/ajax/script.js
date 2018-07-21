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
$("#lastinput").click(function(){
	var errors = "";
	if(isEmail($("#email").val()) == false){
		errors += "email<br>";
	}
	if(isNumber($("#phone").val()) == false){
		errors += "phone<br>";
	}
	if(isPassword($("#password").val()) == false){
		errors += "password";
	}
	if(errors != ""){
		$("#shortages").html(errors);
	}
});