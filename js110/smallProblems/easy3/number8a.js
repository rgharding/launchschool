// function cleanUp(str) {
//   let newStr = ''
//   let regex = /[a-z ]/indx

//   for (let indx = 0; indx < str.length; indx += 1) {
//     if (regex.test(str[indx])) {
//       newStr += str[indx];
//     } else {
//       newStr += ' ';
//     }
//   }


//   return noExtraSpaces(newStr);
// }

// function noExtraSpaces(str) {
//   let noSpaceString = str[0];

//   for (let indx = 1; indx < str.length; indx += 1) {
//     if (str[indx] === ' ' && str[indx - 1] === " ") {
//       continue;
//     } else {
//       noSpaceString += str[indx];
//     }
//   }
  
//   return noSpaceString;
// }


// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "




function cleanUp2(str) {
  let regex = /[a-z]/i
  let newStr = ''
  

  for (let indx = 0; indx < str.length; indx += 1) {
    if (regex.test(str[indx])) {
      newStr += str[indx];
    } else if ( indx === 0  ||  lastChar(newStr) !== ' ') {
      newStr += ' '
    }
  }

  return newStr;
}


function lastChar (str) {
  return str[str.length - 1];
}
console.log(cleanUp2("---what's my +*& line?"));    // " what s my line "