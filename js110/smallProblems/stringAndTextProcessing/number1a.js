function isUppercase(str) {
  let regexCaps = /[A-Z0-9\W]/
  
  for (let char of str) {
    if (!regexCaps.test(char)) {
      return false;
    }
  }
  

  return true;
}


//console.log(isUppercase('t'));               // false
//console.log(isUppercase('T'));               // true
//console.log(isUppercase('Four Score'));      // false
//console.log(isUppercase('FOUR SCORE'));      // true
//console.log(isUppercase('4SCORE!'));         // true
//console.log(isUppercase(''));                // true



function isUppercase2(str) {
  return str.toUpperCase() === str;
}

console.log(isUppercase2('t'));               // false
console.log(isUppercase2('T'));               // true
console.log(isUppercase2('Four Score'));      // false
console.log(isUppercase2('FOUR SCORE'));      // true
console.log(isUppercase2('4SCORE!'));         // true
console.log(isUppercase2(''));                // trues