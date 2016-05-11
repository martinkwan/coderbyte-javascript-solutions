//Have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. 
//For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. 
//The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. 
//The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. 
//If both ranges do not overlap by at least x numbers, then your program should return the string false. 

function OverlappingRanges(arr) { 
  var firstArr = [];
  var secondArr = [];
  var count = 0;
  //loop through and push numbers in the range of arr[0] and arr[1] to firstArr
  for(var i = arr[0]; i <= arr[1]; i++){
  	firstArr.push(i);
  }
  //loop through and push numbers in the range of arr[2] and arr[3] to secondArr
  for(var j = arr[2]; j <= arr[3]; j++){
  	secondArr.push(j);
  }
  //loop through numbers in firstArr
  for(var x = 0; x < firstArr.length; x++){
  	//if number is found in secondArr, add 1 to count
  	if(secondArr.indexOf(firstArr[x]) > -1){
       count++;
       }
  }
  //return true if count is equals to arr[4]
  return count >= arr[4];       
}