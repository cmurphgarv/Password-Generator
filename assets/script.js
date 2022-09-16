// Assignment code here
function generatePassword() {
  // Create variables from each of the prompts required of user to make criteria for password
  var passLengthMin = window.prompt("What is the minimum number of characters allowed in the password?");
  var passLengthMax = window.prompt("What is the maximum number of characters allowed in the password?");
  alert("All character types will be used for the password (uppercase, lowercase, numbers, and special characters)");
  
  // password will start out as an empty string
  var password = "";

  // all characters allowed to be in password
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordLength = Math.floor(Math.random() * passLengthMax + passLengthMin);

  // use a for loop to generate password by iterating over passwordLength
  for (var i = 0; i<= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
