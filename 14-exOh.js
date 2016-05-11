//Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. 
//Only these two letters will be entered in the string, no punctuation or numbers. 
//For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

function ExOh(str) { 
  var xCount = 0;
  var oCount = 0;
  //loop through letters
  for(var i =0;i<str.length;i++){
  	//if letter is x, add 1 to xCount
    if(str[i] == "x"){
   	  xCount++;
  }
  	//else add 1 to oCount
    else{
      oCount++;
    }
  }
  //returns true if equal, returns false if not
  return xCount === oCount; 
}