function isUppercase(str) {
  let regexUpper = /[A-Z]/
  let regexLetter = /[a-z]/i
  let result = true;
  
  for (let letter of str) {
    if (!regexLetter.test(letter)) {
      continue;
    } else if (!regexUpper.test(letter)) {
      result = false;
    }
  }
    return result;
}


//console.log(isUppercase2('t'));               // false
//console.log(isUppercase2('T'));               // true
//console.log(isUppercase2('Four Score'));      // false
//console.log(isUppercase2('FOUR SCORE'));      // true
//console.log(isUppercase2('4SCORE!'));         // true
//console.log(isUppercase2(''));                // true



function isUppercase2(str) {
  return str.toUpperCase() === str
}




console.log(isUppercase2('t'));               // false
console.log(isUppercase2('T'));               // true
console.log(isUppercase2('Four Score'));      // false
console.log(isUppercase2('FOUR SCORE'));      // true
console.log(isUppercase2('4SCORE!'));         // true
console.log(isUppercase2(''));                // true