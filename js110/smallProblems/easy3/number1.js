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


//console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
//console.log(crunch('4444abcabccba'));              // "4abcabcba"
//console.log(crunch('ggggggggggggggg'));            // "g"
//console.log(crunch('a'));                          // "a"
//console.log(crunch(''));                           // ""


function crunch2(inputStr) {
  let strArr = inputStr.split('');
  let result = strArr[0];


  

  for (let i = 1; i < strArr.length; i += 1) {
    let nextValue = strArr[i];
    let regex = new RegExp(`${nextValue}`, 'g')
    
    if (regex.test(strArr[i - 1])) {
      continue;
    }  else {
      result += strArr[i]
    }
  }
  return result;
}

console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''))