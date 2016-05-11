//Have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. 
//The Hamming distance is the number of positions where the corresponding characters are different. 
//For example: if strArr is ["coder", "codec"] then your program should return 1. 
//The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers. 

function HammingDistance(strArr) { 
  var count = 0;
  //loop through each letter in the first word
  for(var i = 0; i < strArr[0].length; i++){
  	//if the letter in the first word is not the same as the letter in the second word, add 1 to count
  	if(strArr[0][i] !== strArr[1][i]){
    	count++;
    }
  }
  return count; 
}