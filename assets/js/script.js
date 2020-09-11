// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  let selectType = ["l","u","n","s"]
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let symbol = ["!","@", "#", "_"]

  var lengthPassword = prompt("Please enter the length of the password - must be at least 8 and no more than 128 and include a letter (upper and lower) and special character")
  
  //clear the character selection types
  selectType = [];

  // test if user entered a length
  if (lengthPassword >= 8 && lengthPassword <= 128) {
     
    // confirm if user wishes to use lowercase and load selection array
    if (confirm("Should the password include lowercase letters?")){
        selectType.push("l")
        console.log(selectType)
    }

    // confirm if user wishes to use uppercase and load selection array
    if (confirm("Should the password include uppercase letters?")){
        selectType.push("u")
        console.log(selectType)
    }

    // confirm if user wishes to use numbers and load selection array
    if (confirm("Should the password include numbers?")){
        selectType.push("n")
        console.log(selectType)
    }

    // confirm if user wishes to use special characters and load selection array
    if (confirm("Should the password include special characters?")){
        selectType.push("s")
        console.log(selectType)
    }

    // loop to create password by user entered length
    var i = 0
    while (i <= lengthPassword) {
        
        console.log(lowerCase[i])
        console.log(upperCase[i])
        console.log(symbol[i])

        i++;
    }
     
  //present the generated password in the password text 
  passwordText.value = password;
  }

}

// function to generate password
function generatePassword () {
    Math.floor(Math.random() * 25);
    }

// function to generate random lowercase
function getRandomLower () {
Math.floor(Math.random() * 25);
}

// reuse to generate random uppercase
function getRandomUpper () {
    Math.floor(Math.random() * 25);
 }

// reuse to generate random symbol
function getRandomSymbol () {
    Math.floor(Math.random() * 10);
}

// reuse to generate random integer
function getRandomInteger () {
    Math.floor(Math.random() * 10);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
