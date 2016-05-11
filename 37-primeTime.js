//Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. 
//The range will be between 1 and 2^16. 

function PrimeTime(num) { 
  //loop through all numbers from num-1 to 2
  for(var i = num - 1; i > 1; i--){
  	//if num is not divided cleanly by i, return false
  	if(num % i === 0){
    	return false;
    }
  } 
  return true;       
}