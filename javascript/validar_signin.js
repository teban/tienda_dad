function signIn(form) {
	
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if (username != "" && password != "") {
		
		form.submit();
	}
	else {
		document.getElementById("username_signin").innerHTML = "El campo de nombre de usuario o password estan vacios"
	}
	
}
