let sync = require('readline-sync');

let numArr = [];

let num1 = sync.question('Enter a number: ');
let num2 = sync.question('Enter a number: ');
let num3 = sync.question('Enter a number: ');
let num4 = sync.question('Enter a number: ');
let num5 = sync.question('Enter a number: ');
let num6 = sync.question('Enter a number: ');


numArr.push(num1, num2, num3, num4, num5);

if (numArr.includes(num6)) {
  console.log(`${num6} is in these numbers`)
} else {
  console.log(`${num6} is not the arr`);
}