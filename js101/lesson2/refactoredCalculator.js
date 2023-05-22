let sync = require('readline-sync');
const MESSAGE = require('./messagesCalc.json');


function prompt(message) {
    console.log(`=> ${message}`);
}

function getNumber() {
    return (sync.question());
}

function isValidNumber(num) {
 return  num.trimStart() === '' || Number.isNaN(Number(num)); 
    }


prompt(MESSAGE.selectLang);
let lang = sync.question()
prompt(MESSAGE[lang].welcome);



while (true) {

prompt(MESSAGE[lang].firstNumber);
let firstNumber = getNumber();

while (isValidNumber(firstNumber)) {
    prompt(MESSAGE[lang].notValidNumber);
    firstNumber = sync.question();
}


prompt(MESSAGE[lang].secondNumber);
let secondNumber = getNumber();

while (isValidNumber(secondNumber)) {
  prompt(MESSAGE[lang].notValidNumber);
  firstNumber = sync.question();
}

prompt(MESSAGE[lang].operation);
let operation = getNumber();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(MESSAGE[lang].notValidNumber);
  operation = sync.question();
}

let result;
switch (operation) {
   

  case '1':
    result = Number(firstNumber) + Number(secondNumber);
    break;
  
  case '2':
    result = firstNumber - secondNumber;
    break;
  
  case '3':
    result = firstNumber * secondNumber; 
    break;

  case '4': 
    result = firstNumber / secondNumber;
    break;
}

prompt(`${MESSAGE[lang].result}: ${result}`);

prompt(MESSAGE[lang].continue)
  let again = sync.question()

if (again !== '1') {
  break;
  }
}


