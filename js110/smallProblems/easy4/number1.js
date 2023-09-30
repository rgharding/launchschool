// Write a program that asks for six numbers. The program will tell if the sixth number appears in the previously entered numbers

let sync = require('readline-sync');

let num1 = parseInt(sync.question('Enter a number: '));
let num2 = parseInt(sync.question('Enter a number: '));
let num3 = parseInt(sync.question('Enter a number: '));
let num4 = parseInt(sync.question('Enter a number: '));
let num5 = parseInt(sync.question('Enter a number: '));
let num6 = parseInt(sync.question('Enter a number: '));

let numArr = [num1, num2, num3, num4, num5];

if (numArr.includes()) {
  console.log(`The number: ${num6} appears in ${numArr}`);
} else {
  console.log(`The number: ${num6} does not appears in ${numArr}`);
}



function includesGreaterThan(arr, valToCheck) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > valToCheck) {
      return true;
    }
  }
  return false; 
}

console.log(includesGreaterThan(numArr, 25));