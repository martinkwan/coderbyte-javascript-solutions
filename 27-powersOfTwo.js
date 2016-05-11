//Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. 
//If it's not return the string false. 
//For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false. 

function PowersofTwo(num) { 
  //base case
  if(num === 2){
  	return true;
  }
  //else if divisible by 2, recursion
  else if(num % 2 === 0){
  	return PowersofTwo(num/2); 
  }
  //else if not divisible by 2 then return false
  else{
  	return false;
  }
}

// For example, if num is 16, 
// 16/2 = 8/2 = 4/2 = 2 = true
// If num is 22,
// 22/2 = 11/2  = false   