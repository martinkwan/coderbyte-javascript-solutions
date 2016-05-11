//Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. 
//The time will be in a 12 hour clock format. 
//For example: if str is 9:00am-10:00am then the output should be 60. 
//If str is 1:00pm-11:00am the output should be 1320. 

function CountingMinutesI(str) { 
  //if hour on the first time is a single digit, add a 0 to the front of it
  if(str.indexOf(":") === 1){
  	str = "0" + str;
  }
  //if the hour on the second time is a single digit, add a 0 to the front of it
  if(str.indexOf(":",3) === 9){
    str = str.slice(0,8) + "0" + str.slice(8);
  }
  
  //convert hours to minutes, and add up total minutes for both first and second clocks
  var firstTotalMinutes = str.slice(0,2) * 60  + Number(str.slice(3,5));
  var secondTotalMinutes = str.slice(8,10) * 60 + Number(str.slice(11,13));
  //find out if am or pm
  var firstAmPm = str.slice(5,7);
  var secondAmPm = str.slice(13,15);
  //if either clocks are pm, add 12 hours * 60 minutes to it
  if(firstAmPm === "pm"){
  	firstTotalMinutes += (60*12);
  }
  if(secondAmPm === "pm"){
  	secondTotalMinutes += (60*12);
  }
  //if first time is less than second, return the difference in minutes between them
  if(firstTotalMinutes < secondTotalMinutes){
  	return (secondTotalMinutes - firstTotalMinutes);
  }
//if the first time is more than second, add a whole day (24 hours * 60 minutes) to the difference in minutes between them
  else if(firstTotalMinutes > secondTotalMinutes){
  	return (24 * 60) + (secondTotalMinutes - firstTotalMinutes);
  }
}
