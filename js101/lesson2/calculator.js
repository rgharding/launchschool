const sync = require('readline-sync');

function prompt(message) {
    console.log(`=> ${message}`);
}

function invalidNum(num) {
  return (num === '') || Number.isNaN(Number(num)) ;
}


prompt('Welcome to Calculator');

prompt('Enter first number: ');
let num1 = sync.question();

while(invalidNum(num1)) {
  prompt('Enter Valid Number')
  num1 = sync.question();
}

prompt('Enter second number: ');
let num2 = (sync.question());

while(invalidNum(num2)) {
  prompt('Enter Valid Number')
  num2 = sync.question();
}

prompt(`Select operation: \n1) Add: \n2) Subtract: \n3) Multiply: \n4) Divide: `);
let operation = sync.question();

while(invalidNum(operation)) {
  prompt('Enter Valid Number')
  operation = sync.question();
}

let result;
switch(operation) {
  case '1':
    result = Number(num1) + Number(num2);
    break;

  case 2: 
    result = Number(num1) - Number(num2);
    break;
    
  case 3: 
    result = Number(num1) * Number(num2);
    break;
    
  case 4: 
    result = Number(num1) / Number(num2); 
    break; 
}


prompt(`The result is ${result}`);