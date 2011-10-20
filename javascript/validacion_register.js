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
      // See if the input value contains any text
	return validateRegEx(/.+/,inputField.value, helpText,"Please enter a value.");
}
      
function validateEmail(inputField, helpText) {
        // First see if the input value contains data
	if (!validateNonEmpty(inputField, helpText))
    	return false;

        // Then see if the input value is an email address
    return validateRegEx(/^[\w\.-_\+]+@[\w-]+(\.\w{2,3})+$/,inputField.value, helpText,
    "Formato invalido de email");
}