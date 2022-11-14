/*
[P]roblem- Have the user input 5 numbers. Then have the user input a sixth number. Let the user know if the last number appears in the first 5 numbers

input- numbers
output- string

Rules: 
  1. user inputs 5 numbers
  2. user inputs a sixth number
  3. the program lets the user know if the sixth numbers appears in any of the previous numbers

Questions:
  1. Can the numbers be floating point?
  

[E]xample and test Cases

inputs 12, 23, 45, 32, 47    65 
output => The number 65 does not appear in 12, 23, 45, 32, 47


[D]ata Structure

  Array: yes
  Object: no
  Function: yes

[A]lgorithm

  - create a function 'sixthNumber' that has no parameter
  - inside the function require user input
  - declare and intalize a variable numbersArray to an empty array
  - declare a varibale lastNumber, do not ititalize
  - define a loop 
      count is 1
      condition: loops till numberArray's length is less or equal to 6
      increment counter by 1 on each iteration
  - on each loop request user input a number
  - add inputed number to numbersArray 
  - end loop
  - reassign lastNumber to the value of the last number of numbersArray
  - remove last number of numbersArray

  - define an if statement
    if the lastNumber is included in numbers array
      return lastNumber is included in the numbersArray (list each number)
    else return lastNumber is NOT incluede in the numbersArray (list each number);


[C]ode with intent
*/


function sixthNumber() {
  const sync = require('readline-sync');
  let numbersArray = [];
  let lastNumber;
  let result = "";
  let numbers = ""

  while (numbersArray.length < 6) {
    let number = sync.question('Enter a number: ');
    numbersArray.push(number);
  }

  lastNumber = numbersArray.pop();

  numbersArray.forEach(number => {
    numbers += number + ', '
  })

  

  if (numbersArray.includes(lastNumber)) {
    result = `The number ${lastNumber} appears in ${numbers}`
  } else {
    result = `The number ${lastNumber} does NOT appear in ${numbers}`
  }
  
  return result;
}


console.log(sixthNumber());

