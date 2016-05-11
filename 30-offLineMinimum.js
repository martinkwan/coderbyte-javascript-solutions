//Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. 
//The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. 
//When finished, your program should return that new set with integers separated by commas. 
//For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 

function OffLineMinimum(strArr) { 
  var finalArray= [];
  //loop through each character of array
  for(var i = 0; i < strArr.length; i++){
  	//if current character is "E"
  	if(strArr[i] === "E"){  
 	  var array = [];
 	  //loop through string from beginning until current character
      for(var j = 0; j < i; j++){
      	//if current character is not "E", push it into array
      	if(strArr[j] !== "E"){
    	  array.push(strArr[j]);
        }
      }
      //reduce array to smallest number
  	  var smallestNum = array.reduce(function(a,b){
  	  	return a < b? a: b});
  	  //push smallest number to finalArray
  	  finalArray.push(smallestNum);
  	  //remove smallest number from string, and replace it with "E" (to keep strArr.length the same)
  	  strArr.splice(strArr.indexOf(smallestNum),1,"E");
    }
  }
  //join array of selected smallest numbers into string and return it
  return finalArray.join(",");      
}