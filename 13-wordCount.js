//Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). 
//Words will be separated by single spaces. 

function WordCount(str) { 
  //split string into an array of words
  var array = str.split(" ");
  //return the number of words
  return array.length;    
}