// Take out duplicate letters

function crunch(inputStr) {
  let strArr = inputStr.split('');
  let returnStr = strArr[0];

  if (strArr.length === 0) {
    returnStr = '""'
    return returnStr;
  }

  for (let i = 1; i < strArr.length; i += 1) {
    if (strArr[i] === strArr[i - 1]) {
      continue;
    } else {
      returnStr += strArr[i];
    }
  }

  return returnStr;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""