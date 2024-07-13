let sync = require('readline-sync');

let num1 = parseInt(sync.question('Enter a number: '));
let num2 = parseInt(sync.question('Enter a number: '));

console.log(`The sum of ${num1} plus ${num2} is ${num1 + num2} `);
console.log(`The differenc of ${num1} minus ${num2} is ${num1  - num2} `);
console.log(`The  of ${num1} * ${num2} is ${num1  * num2} `);
console.log(`The _ of ${num1} / ${num2} is ${num1  / num2} `);
console.log(`The _ of ${num1} % ${num2} is ${num1 %  num2} `);
console.log(`The _ of ${num1} _ ${num2} is ${Math.pow(num1, num2)}`);
