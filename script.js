// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// create generate password function
function generate Password() {

  var upperChars = ["A","B","C","D","E,","F","G","H","I","J","K","L","M","N","O""P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = [1,2,3,4,5,6,7,8,9];
  var specialChars = ['!','@','#','$','%','^','&','*','(',')'];

  var password = '';
  var charLength = prompt( "How many characters do you want?");
  var question1 = confirm("Do you want upper case characters?");
  var question2 = confirm("Do you want lower case characters?");
  var question3 = confirm("Do you want special characters?");

  var myAnswerObject = {
  upperCharacters: question1,
  lowerCharacters: question2,
  specialCharacters: question3,
  numbers: question4
}

// validate length of characters 
  if ( charLength < 8 || charLength > 125){
    alert("The characters length has to be between 8 and 128!");
    generatePassword();
  }
else if (question1 ===true){
  for ( var i = 0; i < charLength; i++){
    var index = Math.floor(Math.random()* charLength +1);
    var charChosen = upperChars[index];
    password +- charChosen;
  }
  return password;
}
  //set our variables
  //check which characters the user whats

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
}

