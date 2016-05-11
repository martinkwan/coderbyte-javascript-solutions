//Have the function SwapCase(str) take the str parameter and swap the case of each character. 
//For example: if str is "Hello World" the output should be hELLO wORLD. 
//Let numbers and symbols stay the way they are. 

function SwapCase(str) { 
  var newStr = "";
  //loop through each letter
  for(var i = 0; i< str.length; i++){
  	//if letter is equal to uppercase version of the letter, make it lowercase
  	if(str[i] === str[i].toUpperCase()){
    	newStr+= str[i].toLowerCase();
    }
    else if(str[i] === str[i].toLowerCase()){
  	//else if letter is equal to lowercase version of the letter, make it uppercase
    	newStr += str[i].toUpperCase();
    }
    //else if it is not a letter, add it to newStr without modifying it
    else{
    	newStr += str[i];
    }
  }
  return newStr; 
}
