// // Assignment code here

function writePassword (isUppercaseRequired, isLowercaseRequired, isNumericalRequired, isSpecialRequired, charCount) {
  var uppercaseCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [1,2,3,4,5,6,7,8,9,0];

  var passwordText = ""
  var get = document.querySelector("#generate");
  get.addEventListener("click", function() {
    ps=writePassword();
    document.getElementById("password");

  });
  
  var options =[];

  if (isUppercaseRequired){
    options = options.concat(uppercaseCharacters); 

  if (isLowercaseRequired){
    options = options.concat(lowercaseCharacters);
  
  }


for(let i = 0; i < charCount; i++) {
  let randomChars = options[Math.floor(Math.random() * options.lenght)];
  console.log(randomChars);
  passwordText += randomChars;
}

return passwordText;


}
var btn = document.getElementById(“generate”);

btn.addEventListener(“click”, alertMe);

function alertMe(){

alert(“The button has been clicked!”);

}

function generatePassword() {
   window.alert ("Please select the amount of characters desired.");

  if (charCount >- 8 && charCount <- 128){

    var isLowercaseRequired - confirm("Use lower case letters?");
  }
}
function prompCritera(); {
  var min = window.alert ("minimum number of characters?")
  var max = window.prompt("maximum number of characters?")
  var length = window.prompt("Choose length of password between 8 and 20 characters.")
  var lowercase = window.confirm("Do you want numbers?")
  var specialcase = window.confirm("Do you want special characters?")
  var uppercase = window.prompt("Do you want uppercase letters?");
  generatePassword(length, uppercase, lowercase, numbers, specialcase)
}

function randomWholenumber(min,max); {
  var bounds = max - min
  var decimal = Math.random()
  
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
generateBtn.addEventListener("click", function(){
  promptRequirements();
}
console.log()
}

// copy.addEventListener("click", function () {
//   copyPassword();

document.getElementById("generate").addEventListener("click", function() {
  writePassword();

});