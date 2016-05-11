//Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 
//For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
//If there are no words with repeating letters return -1. Words will be separated by spaces. 

function LetterCountI(str) { 
  //split string into array of words
  var str = str.split(" ");
  var array= [];
  var counter=0; 
  //loop through each word
  for(var i = 0; i < str.length; i++){
  	var maxCount = 0;
  	//split each word into array of letters, then sort alphabetically
  	var newStr = str[i].split("").sort();   
  	//loop through each letter of each word
    for(var j = 0; j < newStr.length; j++){
      //if current letter is the same as the next letter, add 1 to counter		
      if(newStr[j] === newStr[j+1]){
      	counter++;
      }
      //else if current letter is not the same as next and counter is greater than maxCount, change maxCount to counter and reset counter  
      else if(counter > maxCount){
      	maxCount = counter;
        counter = 0;
      }
    }
    //push array of the word and the maxCount of duplicate letters for the word
    array.push([str[i],maxCount]);
  }
  //sort all the arrays in largest to smallest maxCounts and put it in newArray
  var newArray = array.sort(function(a,b){
  	return b[1] - a[1]});
  //if the first item in newArray (the word with largest maxCount) has a maxCount of 0, return -1.
  if(newArray[0][1] === 0){
  	return -1; 
  }
  //else return the word with the largest maxCount
  else{
  	return newArray[0][0];
  }
}