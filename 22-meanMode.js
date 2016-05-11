//Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
//The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

function MeanMode(arr) { 
  //find mean by adding each number of array and dividing by arr.length
  var mean = (arr.reduce(function(a,b){ return a+b})) / arr.length;
  //filter arr by allowing only numbers that are repeated
  var mode = arr.filter(function(num,i){ return arr.indexOf(num) != i});
  //while mode array has more than 1 number
  while(mode.length > 1){
  	//keep filtering duplicates until the number with the most duplicates is left
  	mode = mode.filter(function(num,i){ return mode.indexOf(num) != i});
  }
  //if mode equals mean return 1
  if(mode.join() == mean){
  	return 1;
  }
  else{
  	return 0;
  }
}
