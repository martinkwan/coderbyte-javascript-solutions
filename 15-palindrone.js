//Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. 
//For example: "racecar" is also "racecar" backwards. 
//Punctuation and numbers will not be part of the string. 

function Palindrome(str) { 
  //remove spaces from str
  var str = str.split(" ").join("");
  var reversed = "";
  //loop backwards through letters, and add letters to reversed
  for(var i = str.length - 1; i >= 0; i--){
  	reversed += str[i];
  }
  return reversed === str;       
}