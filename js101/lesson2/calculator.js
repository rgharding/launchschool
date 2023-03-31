const sync = require('readline-sync');
const sayThis = require('./messages_calc.json')

function prompt(message) {
    console.log(`=> ${message}`);
}

function invalidNum(num) {
  return (num === '') || Number.isNaN(Number(num)) ;
}


prompt(sayThis["es"]["welcome"]);

while(true) {

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

prompt(`Would you like to continue?\nYes: 1 \nNo: 2`)
let again = sync.question()

while(invalidNum(again)) {
  prompt(`If YES enter: 1\n If NO enter: 2`);
  again = sync.question();
}

  if (again === '2') {
    break;
  }
}