//Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once
//(ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

function ABCheck(str) { 
  //loop through letters
  for(var i=0;i<str.length;i++){
  	//if a and b are seperated by 4 indexes anytime in the string, return true
  	if((str[i] === "a" && str[i+4] === "b") || (str[i] === "b" && str[i+4] === "a")){
    	return "true";
    }
  }
  return "false";        
}
