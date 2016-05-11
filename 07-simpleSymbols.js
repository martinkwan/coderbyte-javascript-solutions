//Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. 
//The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
//So the string to the left would be false. The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) { 
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  //loop through each character
  for(var i = 0; i < str.length; i++){
  	//if it is a letter
  	if(alphabet.indexOf(str[i]) > -1){
  	  //if previous and next characters are not "+", return false
   	  if(!(str[i-1] === "+" && str[i+1] === "+")){
    	return "false";
      }
    }
  }
  return "true";         
}