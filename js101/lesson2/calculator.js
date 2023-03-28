const sync = require('readline-sync');

console.log('Welcome to Calculator!');    

console.log('Enter first number: ');
let num1 = Number(sync.question());


console.log('Enter second number: ');
let num2 = Number(sync.question());

console.log(`Select operation: \n1) Add: \n2) Subtract: \n3) Multiply: \n4) Divide: `);
let operation = Number(sync.question());

let result;

switch(operation) {
  case 1:
    result = num1 + num2;
    break;

  case 2: 
    result = num1 - num2;
    break;
    
  case 3: 
    result = num1 * num2;
    break;
    
  case 4: 
    result = num1 / num2; 
    break; 
}


console.log(`The result is ${result}`);