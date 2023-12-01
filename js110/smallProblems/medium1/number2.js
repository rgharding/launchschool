function rotateRightmostDigits(inputDigit, indexFromEnd) {
  let digitArray = String(inputDigit).split('');
  let length = digitArray.length;
  let digitToRemove = digitArray.splice(length - indexFromEnd, 1);

  
  let returnNumber = Number(digitArray.concat(digitToRemove).join(''));

  return returnNumber;
}


// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917n




function rotateRightmostDigits2(number, numberToRotate) {
  let numString = String(number);
  let length = numString.length;  
  let start = length - numberToRotate;
  let end = start + 1; 
  
  let stringToRotate = numString.slice(start, end);
  let numStringStart = numString.slice(0, start)
  let numStringEnd =  numString.slice(end);

  return  numStringStart + numStringEnd + stringToRotate
}

console.log(rotateRightmostDigits2(735291, 1));      // 735291
console.log(rotateRightmostDigits2(735291, 2));      // 735219
console.log(rotateRightmostDigits2(735291, 3));      // 735912
console.log(rotateRightmostDigits2(735291, 4));      // 732915
console.log(rotateRightmostDigits2(735291, 5));      // 752913
console.log(rotateRightmostDigits2(735291, 6));      // 352917