//Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str) { 
  var newArr = [];
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  var vowels = "aeiou";
  for(var i = 0; i < str.length; i++){
    //if char is Z or z, push A or a to new Arr
    if(str[i] === "Z" || str[i] === "z"){
      newArr.push(alphabet.charAt(alphabet.indexOf(str[i])-26));
    }
    //else if char is in alphabet (and is not Z or z), push next letter to newArr
    else if(alphabet.indexOf(str[i]) > -1){
      newArr.push(alphabet.charAt(alphabet.indexOf(str[i])+1));
      //if the newly added character is a vowel, capitalize it
      if(vowels.indexOf(newArr[i]) > -1){
        newArr[i] = newArr[i].toUpperCase();
    }
    }
    //else if char is not in alphabet, push to newArr
    else{
      newArr.push(str[i]);
    }
  }
  //join newArr to string and return
  return newArr.join("");
}


//unicode solution
function LetterChanges(str) { 
  var newArr = [];
  var vowels = "aeiou";
  for(var i = 0; i < str.length; i++){
    //get the unicode for each character in str
    var unicode = str.charCodeAt(i);
    //if unicode value is equal to A-Y or a-y
  	if((unicode >= 65 && unicode < 90) || (unicode >= 97 && unicode < 122)){
    	unicode += 1;
      //push the alphabet character + 1 to newArr
      newArr.push(String.fromCharCode(unicode));
    }
    //if unicode value is equal to Z or z
    else if(unicode == 90 || unicode == 122){
    	unicode -= 25;
      //push alphabet character + 25 to newArr
      newArr.push(String.fromCharCode(unicode));
    }
    //if character is not an alphabet character, push it to newArr unchanged
    else{
    	newArr.push(str[i]);
    }
    //if the new character pushed to newArr is a vowel, capitalize it.
    if(vowels.indexOf(newArr[i]) > -1){
    	newArr[i] = newArr[i].toUpperCase();
    }
  }
  //join into string and return newArr
  return newArr.join("");
}