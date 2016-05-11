//Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. 
//For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. 
//The array will not be empty and will contain at least 2 numbers. 
//It can get tricky if there's just two numbers! 

function SecondGreatLow(arr) { 
  // sort arr by low to high
  var orderedArr = arr.sort(function(a,b){
    return a - b;
  })
  	//filter out duplicates in array
    .filter(function(num,index){
  	  return arr.indexOf(num) === index;
    })
  //if orderedArr is filtered down to one number, return that number as both second lowest and second greatest
  if(orderedArr.length === 1){
  	return orderedArr[0] + " " + orderedArr[0];
  }
  //else, return the second smallest number and second to last number
  else{
  	return orderedArr[1] + " " + orderedArr[orderedArr.length-2]; 
  }
}
