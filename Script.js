
  function Validate() {
    var inputElement = document.getElementById("email");
    var enteredValue = inputElement.value;
    var errorMessageElement = document.getElementById("error-message");

    if (enteredValue) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (enteredValue.match(emailPattern)) {
        errorMessageElement.textContent = ""; 
      } else {
        errorMessageElement.textContent = "Please provide a valid email adress"; // Display error message
        inputElement.style.borderColor="hsl(354, 100%, 66%)"; 
      }
    } else {
      errorMessageElement.textContent = "Please enter an email address"; // Display error message
    }
  }

