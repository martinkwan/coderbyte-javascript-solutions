//Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. 
//The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height. 

function RectangleArea(strArr) { 
  //transform each string in strArr
  var strArr = strArr.map(function(x){
  	//remove parentheses from each string in strArr
  	var array = x.slice(1,x.length-1);
  	//split string into array using space as a seperator
    return array.split(" ");
  })
  //find the (x,y) that is the biggest
  var biggest = strArr.reduce(function(a,b){
  	return a[0] >= b[0] && a[1] >= b[1] ? a: b;
  })
  //find the (x,y) that is the smallest
  var smallest = strArr.reduce(function(a,b){
    return a[1] <= b[1] && a[0] <= b[0]? a: b;
  })
  // area = length * width
  var area = (biggest[0] - smallest[0]) * (biggest[1] - smallest[1]);
  return area;
}

// biggest[0] = x2, smallest[0] = x1
// x2 - x1 = length
// biggest[1] = y2, smallest[1] = y1
// y2 - y1 = width 
// area = length * width