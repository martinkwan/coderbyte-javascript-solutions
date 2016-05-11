//Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). 
//Do not count y as a vowel for this challenge. 

function VowelCount(str) { 
  var count = 0;
  var vowels = "aeiou";
  //loop through letters
  for(var i = 0; i<str.length;i++){
  	//if letter is found in vowels, add 1 to count
  	if(vowels.indexOf(str[i]) > -1){
    	count++
    }
  }
  return count;          
}