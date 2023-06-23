let sync = require('readline-sync');

let numberArray = [];

let number1 = Number(sync.question('Enter first number: '));
let number2 = Number(sync.question('Enter second number: '));
let number3 = Number(sync.question('Enter third number: '));
let number4 = Number(sync.question('Enter fourth number: '));
let number5 = Number(sync.question('Enter fifth number: '));
let numToCheck = Number(sync.question('Enter number to check: '));

numberArray.push(number1, number2, number3, number4, number5);

if (numberArray.includes(numToCheck)) {
  console.log( `The number ${numToCheck} appears in this list of numbers: ${numberArray} `)
} else {
  console.log( `The number ${numToCheck} does NOT appear in this list of numbers: ${numberArray} `)
}

function checkNumber(arr, num) {
  let isLarger = (element) => element > num;
  let result = arr.some(isLarger);
  console.log(result); 
}

checkNumber(numberArray, numToCheck);