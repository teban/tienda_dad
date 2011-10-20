function validateRegEx(regex, input, helpText, helpMessage) {
        // See if the input data validates OK
        if (!regex.test(input)) {
          // The data is invalid, so set the help message and return false
          if (helpText != null)
            helpText.innerHTML = helpMessage;
          return false;
        }
        else {
          // The data is OK, so clear the help message and return true
          if (helpText != null)
            helpText.innerHTML = "";
          return true;
        }
}

function validateNonEmpty(inputField, helpText) {
      // Checa si el input no esta vacio
	return validateRegEx(/.+/,inputField.value, helpText,"Porfavor llena el campo.");
}
      
function validateEmail(inputField, helpText) {
        // Checa si el valor no esta vacio
	if (!validateNonEmpty(inputField, helpText))
    	return false;

        // Checa si el correo es valido
    return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/,inputField.value, helpText,
    "Formato inválido de email");
}

function validateName(inputField, helpText) {
	if (!validateNonEmpty(inputField, helpText))
    	return false;
    	
    return validateRegEx(/[A-Za-z][^0-9]/, inputField.value, helpText, "Pon un nombre");
}

function validateLname(inputField, helpText) {
	if (!validateNonEmpty(inputField, helpText))
    	return false;
    	
    return validateRegEx(/[A-Za-z][^0-9]/, inputField.value, helpText, "Pon un apellido");
}

function validateUsername(inputField, helpText) {
	if (!validateNonEmpty(inputField, helpText))
    	return false;
    	
    return validateRegEx(/[A-Za-z][^0-9]/, inputField.value, helpText, "Pon un nombre de usuario");
}
function validatePwd() {
	var invalid = " "; // Invalid character is a space
	var minLength = 6; // Minimum length
	var pw1 = document.myForm.password.value;
	var pw2 = document.myForm.confirm_password.value;
	
	// check for a value in both fields.
	if (pw1 == '' || pw2 == '') {
		alert('Porfavor confirma tu password.');
		return false;
	}
	
	// check for minimum length
	if (document.myForm.password.value.length < minLength) {
		alert('El password debe ser minimo ' + minLength + ' caracteres.');
		return false;
	}
	// check for spaces
	if (document.myForm.password.value.indexOf(invalid) > -1) {
		alert("No puede tener espacios");
		return false;
	}
	else {
		if (pw1 != pw2) {
			alert ("La confirmacion del password no concuerda.");
			return false;
		}
		else {
			return true;
		}
	}
}

function placeOrder(form) {
        if (validateEmail(form["email"], form["email_error"]) && validateName(form["fname"], form["fname_register"]) &&
		validateLname(form["lname"], form["lname_register"]) && validateUsername(form["username"], form["username_register"]) && validatePwd()) {
          // Submit the order to the server
			form.submit();
        } 
}