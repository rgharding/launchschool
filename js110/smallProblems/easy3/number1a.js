// function crunch(str) {
//   let newStr = str[0];

//   if (str.length < 1) {
//     return newStr
//   }
  
//   for (let i = 1; i < str.length; i += 1) {
//     if (str[i] === str[i - 1]) {
//       continue;
//     } else {
//       newStr += str[i]
//     }
//   }
//   console.log(newStr);
// }


// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""




function crunch2(str) {
  if (str.length < 1) {
    return str;
  }

  let newStr = str[0]
  let count = 1

  while (count < str.length) {
    str[count] === str[count - 1] ? newStr += '' : newStr += str[count];
    count += 1
  }

  return newStr
}


console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''));                           // ""
