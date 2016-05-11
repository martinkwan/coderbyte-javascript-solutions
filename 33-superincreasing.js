//Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. 
//The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. 
//If a superincreasing sequence isn't formed, then your program should return the string "false" 

function Superincreasing(arr) { 
  var sum = 0;
  //loop through each number in array
  for(var i = 0; i < arr.length; i++){
  	//if anytime the number is less than current sum, return false
  	if(arr[i] <= sum){
    	return false;
    }
    //add current number to sum
    sum += arr[i];
  }
  return true;       
}
