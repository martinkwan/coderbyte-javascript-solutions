//Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. 
//For example: if str is "88Hello 3World!" the output should be 91. 
//You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. 
//So "55Hello" and "5Hello 5" should return two different answers. 
//Each string will contain at least one letter or symbol. 

function NumberAddition(str) { 
  var numbers = "";
  //loop through characters/numbers
  for(var i = 0; i < str.length; i++){
  	//if character is a number, add to numbers
  	if(str[i] >= '0' && str[i] <= '9'){
    	numbers += str[i];
    }
    //else add a space to number
    else{
    	numbers += " ";
    }
  }
  //split numbers into array as a space as a seperator
  return numbers.split(" ")
  	//convert each item in array into a number
  	.map(function(num){
  		return Number(num)})
  	    //add each number in array
  		.reduce(function(a,b){
  			return a + b});
}
