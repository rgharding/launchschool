// Have user enter two numbers and return the result of combining numbers with different operations.

let sync = require('readline-sync');

let num1 = parseInt(sync.question('Enter first Number: '));
let num2 = parseInt(sync.question('Enter second Number: '));

let operationArr = ['+', '-', '/' ]

function showMath(param1, param2) {
  console.log(`${num1} + ${num2} --> ${num1 + num2}`)
  console.log(`${num1} - ${num2} --> ${num1 - num2}`)
  console.log(`${num1} * ${num2} --> ${num1 * num2}`)
  console.log(`${num1} / ${num2} --> ${num1 / num2}`)
  console.log(`${num1} % ${num2} --> ${num1 % num2}`)
  console.log(`${num1} ** ${num2} --> ${num1** num2}`)
}


showMath(num1, num2);