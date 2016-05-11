//Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
//For example: if str is 454793 the output should be 4547-9-3. 
//Don't count zero as an odd number. 

function DashInsert(str) { 
  //convert into string
  var str = str.toString();
  var newStr = "";
  //loop through each number in string, and add number into newStr
  for(var i = 0; i < str.length; i++){
    newStr += str[i];
    //if current number and next number is an odd number, add a "-" to newStr
  	if(((str[i] % 2) == 1) && ((str[i+1] % 2) == 1)){
		newStr += "-";
    }
  }
  return newStr; 
}
