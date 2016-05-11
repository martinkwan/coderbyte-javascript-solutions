//Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. 
//For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
//The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

function ArrayAdditionI(arr) { 
  //find largest number in array
  var largest = Math.max.apply(null,arr);
  //remove largest number from array
  arr.splice(arr.indexOf(largest),1);
  var table = [[]];
  //loop through numbers in array
  for(var i = 0; i < arr.length; i++){
  	//loop through each item in table
  	for(var j = 0, len = table.length; j < len; j++){
  	  //create addThis array by concating current number to array in table
      var addThis = table[j].concat(arr[i]);
      //push new addThis array to table 
      table.push(addThis);
      //find sum of addThis
      var sum = addThis.reduce(function(a,b){
       	return a + b;});
      //if sum of addThis is equals to largest number, return true
      if(sum === largest){
      	return true;
      }
    }
  }
  return false;       
}

//This solution loops through each number in array and adds array to the table array. 
//This will eventually produce all possible sets of numbers, and checks each set to see it sums to largest number.

//For example if arr is    [1,2,3,4,10]
//remove largest so arr is [1,2,3,4]
//begin with table = [[]]
//add 1 to table   = [[], [1]]
//add 2 to table   = [[], [1], [1,2], [2]]
//add 3 to table   = [[], [1], [1,2], [2], [1,3], [1,2,3], [2,3], [3]]
//add 4 to table   =[[], [1], [1,2], [2], [1,3], [1,2,3], [2,3], [3], [1,4], [1,2,4], [2,4], [1,3,4], [1,2,3,4], [2,3,4], [3,4], [4]]
//would return true when loop reaches [1,2,3,4], because 1 + 2 + 3 + 4 = 10.