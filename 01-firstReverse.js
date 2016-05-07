//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 


function FirstReverse(str) { 
  return str.split("")     //split string into an array
            .reverse()     //reverses array
            .join("");     //joins array into a string    
}
