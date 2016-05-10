//Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
//Words will be separated by only one space. 

function LetterCapitalize(str) { 
  //split string into array of words
  var array = str.split(" ");
  //For each word in array, split into array and capitalize first letter, then join back to string
  for(var i= 0; i<array.length; i++){
    var stringArray = array[i].split("");
    stringArray[0] = stringArray[0].toUpperCase();
    array[i] = stringArray.join("");
  }
  return array.join(" ");       
}