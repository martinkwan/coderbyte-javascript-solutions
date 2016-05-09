//Have the function FirstFactorial(num) take the num parameter being passed 
//and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
//For the test cases, the range will be between 1 and 18.

function FirstFactorial(num){
	//loop through in decreasing order from num
	for(var i = num - 1; i >= 1; i--){
		//num equals num * (num-i)
		num *= i;
	}
	return num;
}


//secondary solution
function firstFactorial(num){
	//base case for recursion
	if(num === 1){
		//if num is 1, return 1 and stop recursion
		return 1;
	}
	//keeps recursing through until it reaches the base case.
	return num * FirstFactorial(num-1);
	//for example if num = 4...
	//4 * f(4-1)          -> 4 * (3 * f(3-1)) 
	//4 * 3 * f(3-1)      -> 4 *  3 * (2 * f(2-1))
	//4 * 3 * 2 * f(2-1)  -> 4 *  3 *  2 * 1
	//4 * 3 * 2 * 1       -> 24
}