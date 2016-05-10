//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
//If there are two or more words that are the same length, return the first word from the string with that length.
//ignore punctuation and assume sen will not be empty.

function LongestWord(sen) { 
  //set up allowed characters a-z, A-Z, 0-9, and space
  var allowedString = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789 "
  var passed ="";
  //loop through every character in sen
  for(var i = 0; i < sen.length; i++){
    //add all allowed characters to passed
  	if(allowedString.indexOf(sen[i]) > -1){
    	passed += sen[i];
    }
  }
  //convert passed into an array of words, then return longest word of array by using .reduce
  return passed.split(" ").reduce(function(a,b){
  	return a.length >= b.length? a:b;
  });       
}

//will add regex solution later