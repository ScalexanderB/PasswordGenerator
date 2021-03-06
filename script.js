// Pseudo-code:
// When generate button is pressed, prompt window appears to ask you 
// how long your password should be (8-128), followed up by 4 confirm windows

//  passwordLength - length of password between 8 and 128 character
    // create an if statement wrapped inside a while loop
    // if passwordLength >= 8 && passwordLength <= 128
    // else invalid input

// lowercaseGen, Would you like lowercase to be included?
// uppercaseGen, Would you like uppercase to be included?
// numberGen, Would you like numbers to be included?
// symbolGen, Would you like special characters to be included?


    // Once every prompt has been answered, generate password using true confirm prompts

/* GLOBAL VARIABLES */

var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()_+-={}[]:;<,>.?/'\"|\\";

/* GLOBAL VARIABLES END */

/* GENERATOR FUNCTIONS BEGIN */

function generatePassword() {
  var passwordLength = window.prompt("How many characters would you like your password to be? Please enter a value between 8 and 128.");

    if (passwordLength <= 7 || passwordLength >= 129) {
      window.alert("Invalid entry. Please enter a value between 8 and 128");
    }
    
    else {
      console.log("Password length is " + passwordLength);
    

        // Ask the user if they want lowercase
        var askLower = confirm("Would you like to include lowercase characters?");

        // Ask the user if they want uppercase
        var askUpper = confirm("Would you like to include uppercase characters?");

        // Ask the user if they want numbers
        var askNumber = confirm("Would you like to include numbers?");

        // Ask the user if they want special characters
        var askSymbol = confirm("Would you like to include special characters?");

        while (askLower !== true && askUpper !== true && askNumber !== true && askSymbol !== true){
          window.alert("You must select at least 1 parameter.")
          var askLower = confirm("Would you like to include lowercase characters?");
          var askUpper = confirm("Would you like to include uppercase characters?");
          var askNumber = confirm("Would you like to include numbers?");
          var askSymbol = confirm("Would you like to include special characters?");
        }
    }
    // Pass all true parameters to the string
    var passwordString = [];

    // Check if addLower passes through to passwordString string
    var addLower = lowerCase.split("");

    if (askLower === true) {
      passwordString = passwordString.concat(addLower);
      console.log("Lowercase will be included");
    }
    else{
      console.log("Lowercase will not be included.");
    }

    // Check if addUpper passes through to passwordString string
    var addUpper = upperCase.split("");
    if (askUpper === true) {
      passwordString = passwordString.concat(addUpper);
      console.log("Uppercase will be included.");
    }
    else{
      console.log("Uppercase will not be included.");
    }

    // Check if addNumber passes through to passwordString string
    var addNumber = number.split("");
    if (askNumber === true) {
      passwordString = passwordString.concat(addNumber);
      console.log("Numbers will be included.");
    }
    else{
      console.log("Numbers will not be included.");
    }

    // Check if addSymbol passes through to passwordString string
    var addSymbol = symbol.split("");
    if (askSymbol === true) {
      passwordString = passwordString.concat(addSymbol);
      console.log("Special characters will be included.");
    }
    else{
      console.log("Special characters will not be included.");
    }

    // Execute randomly generated password based on user confirmations
    var completePassword = "";

    for (var i = 0; i < passwordLength; i++) {
      completePassword += passwordString[Math.floor(Math.random() * passwordString.length)];
      console.log(completePassword);
    }
    
    return completePassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* END OF GENERATOR FUNCTIONS */

generateBtn.addEventListener("click", writePassword);
