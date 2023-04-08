let sync = require('readline-sync');

console.log('Welcome to Calculator!!!');

console.log('Enter First Number: ');
let firstNumber = Number(sync.question());

console.log('Enter Second Number');
let secondNumber = Number(sync.question());

console.log('Enter Operation: \n1: Add\n2: Subtract \n3: Multiply \n4: Divide' );
let operation = Number(sync.question());

let result;
switch (operation) {
   

  case 1:
    result = firstNumber + secondNumber;
    break;
  
  case 2:
    result = firstNumber - secondNumber;
    break;
  
  case 3:
    result = firstNumber * secondNumber; 
    break;

  case 4: 
    result = firstNumber / secondNumber;
    break;
}

console.log(`The result is: ${result}`);
