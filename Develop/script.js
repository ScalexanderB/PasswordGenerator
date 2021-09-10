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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
