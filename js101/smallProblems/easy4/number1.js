let sync = require('readline-sync');

let numArray = [];

console.log('Enter first number: ')
let num1 = sync.question();

console.log('Enter second number: ')
let num2 = sync.question();

console.log('Enter third number: ')
let num3 = sync.question();

console.log('Enter fourth number: ')
let num4 = sync.question();

console.log('Enter fifth number: ')
let num5 = sync.question();

console.log('Enter sixth number: ')
let num6 = sync.question();

numArray.push(num1, num2, num3, num4, num5);
console.log(numArray)

if (numArray.includes(num6)) {
  console.log(`The number ${num6} appears in the sequence containg ${numArray}`);
} else {
  console.log(`The number ${num6} does NOT appear in the sequence containg ${numArray}`);
}