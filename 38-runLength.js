//Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. 
//This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. 
//For example: "wwwggopp" would return 3w2g1o2p. 
//The string will not contain any numbers, punctuation, or symbols. 

function RunLength(str) { 
  var arr = [];
  var count = 1;
  //loop through each letter in string
  for(var i = 0; i < str.length; i++){
  	//if current character is equal to next character, add 1 to count
  	if(str[i] === str[i+1]){
    	count++;
    }
    //else if current character is not equal to next character
    else if(str[i] !== str[i+1]){
    	//push count to arr
    	arr.push(count);
    	//reset count to 1
      	count = 1;
      	//push current character to arr
      	arr.push(str[i]);
    }
  }
  //join arr to string and return it
  return arr.join("");       
}
