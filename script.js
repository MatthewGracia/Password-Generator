
var specialchars = [ '@','%', '+', '\\','/', "'",'!', '#','$', '^','?', ':',',', ')','(','}','{',']','[','~', '-', '_', '.',];


var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


var lowerCasedChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

var upperCasedChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];



function passwordOptions() {
  var length =parseInt ( prompt('How many characters would you like for your password?'), 10
  );

  if (Number.isNaN(length)) {
    alert('Password length must be a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters long');
    return null;
  }

  if (length > 128) {
    alert('Password length must be less than 129 characters long');
    return null;
  }

  
  var hasSpecialCharacters = confirm(
    'Click OK to confirm  special characters.'
  );

  
  var hasNumericCharacters = confirm(
    'Click OK to confirm numeric characters.'
  );

  
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm lowercase characters.'
  );

  
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm uppercase characters.'
  );

  
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('You must select at least one character type');
    return null;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;

}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


function generatePassword() {
  var options = passwordOptions();
  
  var result = [];


  var possibleCharacters = [];

 
  var guaranteedCharacters = [];

 
  if (!options) return null;

 
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialchars);
    guaranteedCharacters.push(getRandom(specialchars));
  }


  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericChars);
    guaranteedCharacters.push(getRandom(numericChars));
  }


  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedChars);
    guaranteedCharacters.push(getRandom(lowerCasedChars));
  }


  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedChars);
    guaranteedCharacters.push(getRandom(upperCasedChars));
  }

  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

 
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

 
  return result.join('');
}


var generateBtn = document.querySelector('#generate');

// function generatePassword() { 
  // let password = "" ;
  // password += uppercase[Math.floor(Math.random()) * uppercase.length];
  // password += lowercase[Math.floor(Math.random()) * lowercase.length];
  // password += numericchars[Math.floor(Math.random()) * numericchars.length];
  // password += specialchars[Math.floor(Math.random()) * specialchars.length];



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
