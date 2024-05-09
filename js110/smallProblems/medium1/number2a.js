function rotateRightmostDigits(number, numberFromEnd) {
  let numArray = String(number).split('');
  
  let sliceIndexBegin = numArray.length - numberFromEnd;
  let sliceIndexEnd = 1;

  let newArr = numArray.splice(sliceIndexBegin, sliceIndexEnd);
  
  return Number.parseInt(numArray.concat(newArr).join(''));
  
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917