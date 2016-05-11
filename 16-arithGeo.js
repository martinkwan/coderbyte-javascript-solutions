//Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
//If the sequence doesn't follow either pattern return -1. 
//An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
//Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

function ArithGeo(arr) { 
  //find constant multiple
  var geoNumber = arr[1] / arr[0];
  //find difference
  var arithNumber = arr[1] - arr[0];
  var gCount = 0;
  var aCount = 0;
  //loop through second to second to last number in array
  for(var i = 1; i < arr.length - 1; i++){
    //if number at i+1 divided by number at i is equals to the geoNumber, add 1 to gCount
    if(geoNumber === (arr[i+1] / arr[i])){
    	gCount++;
    }
    //if number at i+1 minus number at i is equals to arithNumber, add 1 to aCount
    if(arithNumber === (arr[i+1] - arr[i])){
    	aCount++;        
    }
  }
  //if every number in array has the constant multiple, return "Geometric"       
  if(gCount === arr.length -2){
    	return "Geometric";
    }
  //else if every number in array has the same difference, return "Arithmetic"
  else if(aCount === arr.length -2){
  		return "Arithmetic";
  }
  //else return "-1"
  else{
  	return "-1"; 
  }       
}