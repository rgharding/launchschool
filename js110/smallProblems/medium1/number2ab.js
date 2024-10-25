/*
[P]roblem: given a number, and a digit that reprsents (count of digit from end of number), take that digit and remove it and place it at the rear of the number.

I/O
number
number

Rules: 
  - digit selected must be place at end of number
  - return value is a number
  - the digit arguemtn 1 represents the last number


[E]xamples

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


[D]ata Structure
Array: no
Obj: no
HelpFunc: no


[A]lgorithm

- Define a function declararion 'rightMostDigits' the has 2 parameter' 'num' and 'digitsIn'
  - Declare and initalize 'numStr' to the value of num conveted to a string
  - delcare and initalize 'numToRotate' to the value of 'numStr' sliced from 'numStr'[length] - digit, to numStr[length]'     **length - digit/(length - digit) + 1*

  - add the value of numToRotate to numStr

  -return numStr converted to Number
*/


function rotateRightmostDigits(num, digit) {
  let numStrArr = String(num).split('');
  let length = numStrArr.length;
  
  let numToRotate = numStrArr.splice(length - digit, 1);
  
   return Number(numStrArr.concat(numToRotate).join(''));
  
  
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917