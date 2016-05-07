//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

function FirstReverse(str) {
  //split string into an array of characters
  return str.split("")
            //reverses the array
            .reverse()
            //joins reversed array into a string
            .join("");
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
