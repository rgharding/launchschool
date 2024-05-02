// function removeVowels(strArr) {
  
//   return strArr.map(str => {
//     return noVowels(str);
//     })
//   }


// function noVowels(str) {
//   let regex = /[aeiou]/i
//   let returnStr = ''
  
//   for (let char of str) {
//     if (regex.test(char)) {
//       continue;
//     } else {
//       returnStr += char
//     }
//   }

//   return returnStr;
// }


// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]



function removeVowels2(strArr) {
  let regex = /[aeiou]/i

  return strArr.map(str => {
    return str.replace(regex, '');
  })

}

console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]