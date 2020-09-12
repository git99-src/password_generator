// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  let randomArr = [""];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let passNum = ["0","1","2","3","4","5","6","7","8","9"];
  let symbols = [" ", "!", '"', "#", "$", "%","&","'" ,"(", ")", "*","+",",","-", ".", ":", ";","<", "=",">", "?", "@", "[", "^","`", "{", "|", "}", "~" ];
  var lengthPassword = prompt("Please enter the length for the password - must be at least 8 and no more than 128.");
  var newPassword = " ";


  // be sure user entered a password length within the range
  if (lengthPassword < 8 || lengthPassword > 128) {
     
    //not valid password length entered
    alert("Password length must be at least 8 and no longer than 128.");
    
  } else {
   
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
   
    for (i = 0; i < lengthPassword; i++) {
        
        // following just ensures we get one of each type selected
        
        if (i === 0 && needLower) {
         
        // add lowercase to newPassword
        newPassword = newPassword+(getRandomLower(lowerCase));
        
        } else if (i === 1 && needUpper) {
            
        // add uppercase to newPassword
        newPassword = newPassword+(getRandomUpper(upperCase));    
        } else if (i === 2 && needNumber) {
            
        // add number to newPassword
        newPassword = newPassword+(getRandomNumber(passNum));       
        } else if (i === 3 && needSymbol) {
            
        // add symbol to newPassword
        newPassword = newPassword+(getRandomSymbol(symbols));       
        } else {

        // load rest of password with completely random characters
            newPassword = newPassword+(randomCharacter(randomArr));
        };
    };  
    

    password = newPassword;
    };
  //present the generated password in the password text 
  passwordText.value = password;
  };


// retrieve a random character from array built with all char type selections
function randomCharacter(randomArr){
  
return randomArr[Math.floor(Math.random()*(randomArr.length))];
     
};

// function to generate random lowercase
function getRandomLower(lowerCase){
  
    return lowerCase[Math.floor(Math.random()*(lowerCase.length))];
         
};
// function to generate random uppercase
function getRandomUpper(upperCase){
  
    return upperCase[Math.floor(Math.random()*(upperCase.length))];
         
};

// function to generate random numbers
function getRandomNumber(passNum){
  
    return passNum[Math.floor(Math.random()*(passNum.length))];
         
};

// function to generate random symbol
function getRandomSymbol(symbols){
  
    return symbols[Math.floor(Math.random()*(symbols.length))];
         
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

