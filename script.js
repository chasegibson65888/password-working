var passwordLength = document.querySelector("#lengthInput"); //Password Length
var specialCheck = document.querySelector("#specialInput"); //Use special characters? Checkbox
var numberCheck = document.querySelector("#numberInput"); //Use number characters? Checkbox
var lcCheck = document.querySelector("#lcInput"); //Use lowercase characters? Checkbox
var ucCheck = document.querySelector("#ucInput"); //Use uppercase characters? Checkbox
var submitButton = document.querySelector("#submit"); //Submit button
var display = document.querySelector("#display"); //Generated Password Display
var passwordGenerator = document.querySelector("#password-generator");//???


//ARRAYS

var specialArray = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?",
                    "@","[","\\","]","^","_","`","{","|","}","~"]; //Special Characters Array

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; //Number Array

var lArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                 "n","o","p","q","r","s","t","u","v","w","x","y","z"]; //Lowercase Array

var 2Array = ["A", "B","C","D","E","F","G","H","I","J","K","L","M",
                 "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //Uppercase Array


//SUBMIT FUNCTION

submitButton.addEventListener("click", showInput); 

function showInput(event) {
  
  alert("jjj");
  var password = [];
  var charTypes = [];

  if (!specialCheck.checked && !numberCheck.checked && !lcCheck.checked && !ucCheck.checked) {
    display.innerHTML = "select at least one character type"; 
    return;
  }

  if (passwordLength.value < 8 ) {
    display.innerHTML = "come on now, u know its supposed to be between 8 and 128";
    return;
  } 
  
  else if (passwordLength.value > 128) {
    display.innerHTML = "Password length must be between 8-128 characters, try it again dawg";
    return;
  }

  if (specialCheck.checked) {
    charTypes.push(specialArray);
  } 

  if (numberCheck.checked) {
    charTypes.push(numberArray);
  } 

  if (lcCheck.checked) {
    charTypes.push(lArray);
  } 

  if (ucCheck.checked) {
    charTypes.push(2Array);
  } 
  
  for (var i = 0; i < passwordLength.value; i++) {
    var index = Math.floor(Math.random() * charTypes.length) 
    password[i] = charTypes[index][Math.floor(Math.random() * charTypes[index].length)];

  if (password[0] === " " || password[passwordLength.value - 1] === " ") {
    i = i - 1; 
  }
  }
  
  password = password.join("");
  document.getElementById("display").innerHTML = password;
} 


//COPY TO CLIPBOARD

function copyInput() {
  copyText = document.querySelector("#display");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText);
}