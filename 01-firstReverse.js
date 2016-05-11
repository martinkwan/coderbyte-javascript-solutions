//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

function FirstReverse(str) {
  //split string into an array of characters, then reverses the order, then joins it back into a string
  return str.split("").reverse().join("");
}


//secondary solution
function FirstReverse(str) { 
  var newStr = "";
  //loop through string backwards
  for(var i= str.length-1; i>=0; i--){	
    //add characters to newStr in reverse order	
    newStr += str[i]; 		
  }
  return newStr;  								
}
