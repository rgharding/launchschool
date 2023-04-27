let sync = require('readline-sync');
let numberArray = [];

let number1 = sync.question('Enter first number: ');
numberArray.push(number1);

let number2 = sync.question('Enter second number: ');
numberArray.push(number2);

let number3 = sync.question('Enter third number: ');
numberArray.push(number3);

let number4 = sync.question('Enter fourth number: ');
numberArray.push(number4);

let number5 = sync.question('Enter fifth number: ');
numberArray.push(number5);

let number6 = sync.question('Enter Sixth number: ');

 let result = numberArray.includes(number6) ? `${number6} is included in ${numberArray}.` : `${number6} is not included in ${numberArray}.`;

console.log(result);

/*
let array1 = [34, 56, 23, 78, 23];
let num = 25
let array2 = [];

for (let i = 0; i < array1.length; i += 1) {
	if (array1[i] > num ) {
  	array2.push(array1[i]);
  }
}
*/