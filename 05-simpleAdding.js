//Have the function SimpleAdding(num) add up all the numbers from 1 to num.

function SimpleAdding(num) { 
  //loop backwards from num-1 to 1, and add each i to num
  //for example, if num = 4. 4 + 3 + 2 + 1 = 10.
  for(var i = num-1; i > 0; i--){
  	num += i;
  }
  return num;       
}