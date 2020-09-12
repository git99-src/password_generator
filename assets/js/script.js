// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  let randomArr = [" "];
  let selectType = ["l","u","n","s"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let passNum = ["0","1","2","3","4","5","6","7","8","9"];
  let symbols = [" ", "!", '"', "#", "$", "%","&","'" ,"(", ")", "*","+",",","-", ".", ":", ";","<", "=",">", "?", "@", "[", "^","`", "{", "|", "}", "~" ];
  
  var lengthPassword = prompt("Please enter the length of the password - must be at least 8 and no more than 128 and include a letter (upper and lower) and special character");
  var newPassword = " ";


  // test if user entered a length
  if (lengthPassword >= 8 && lengthPassword <= 128) {
     
    //not valid password length entered
    alert("Password length must be at least 8 and no longer than 128.");
    
   
    // confirm if user wishes to use lowercase and load selection array
    if (confirm("Should the password include lowercase letters?")){

        // load randomArr with lowercase letters
        randomArr = lowerCase;
        var needLower = true;
    };

    // confirm if user wishes to use uppercase and load selection array
    if (confirm("Should the password include uppercase letters?")){
        
        // load randomArr with uppercase letters
        randomArr = randomArr.concat(upperCase);
        var needUpper = true;
    };

    // confirm if user wishes to use numbers and load selection array
    if (confirm("Should the password include numbers?")){
       // load randomArr with numbers
       randomArr = randomArr.concat(passNum);
       var needNumber = true; 
    };

    // confirm if user wishes to use special characters and load selection array
    if (confirm("Should the password include special characters?")){
       // load randomArr with symbols
       randomArr = randomArr.concat(symbols);
       var needSymbol = true; 
    };

    // loop to create password by user entered length
  
    for (i=0;i < lengthPassword;i++) {

        //check 1- 4 iterations to ensure one of each type is satisfied
        // // // if i = 1 add uppercase to newPassword
        // if (i = 1 && needUpper) {
        //     add lowercase to newPassword
        // }
        // // if i = 2 add number to newPassword
        // if (i = 2 && needNumber) {
        //     add lowercase to newPassword
        // }
        // // if i = 3 add symbol to newPassword
        // if (i = 2 && needSymbol) {
        //     add lowercase to newPassword
        // }
        
        newPassword = newPassword+(random_item(randomArr));
        console.log(newPassword)
    }   
    

    password = newPassword;
};
  //present the generated password in the password text 
  passwordText.value = password;
  };



    // function to generate password
    function generatePassword () {
        return ;
    };

function random_item(randomArr){
  
return randomArr[Math.floor(Math.random()*(randomArr.length-1))];
     
};

// // function to generate random lowercase
// function getRandomLower () {
//     Math.floor(Math.random() * 25);
// };

// reuse to generate random uppercase
// function getRandomUpper () {
//     Math.floor(Math.random() * 25);
//  }

// reuse to generate random symbol
// function getRandomSymbol () {
//     Math.floor(Math.random() * 10);
// }

// reuse to generate random integer
// function getRandomInteger () {
//     Math.floor(Math.random() * 10);
// }


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
