/* 		jQuery
document.querySelector("#clickk").addEventListener("click",function(){
	var passw1 = document.querySelector("#pass1").value;
	var passw2 = document.querySelector("#pass2").value;
	if(passw1 !="" && passw2 != ""){
		if(passw1==passw2){
		alert("Password Mathched")
		}else{
		alert("password doesn't matched");
		}
	}else{
	alert("Please enter your password");
	}
}) */
/* 		javaScript
$("#clickk").click(function(){
	var passw1 = $("#pass1").val();
	var passw2 = $("#pass2").val();
	if(passw1 != "" && passw2 != ""){
		if(passw1 == passw2){
			alert("password matched");
		}else{
			alert("password doesn't matched");
		}
	}else{
		alert("Enter your password");
	}
}) */