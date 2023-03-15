/*
[P]roblem: givven a number convert the number to a string without using the parseInt and Number methods. 

Input: string
Output: number

Rules: 
  -Cant use built in methods


[E]xamples and Test Cases
  console.log(stringToInteger("4321") === 4321); // logs true
  console.log(stringToInteger("570") === 570); // logs true

[D]ata stucture 
  Array: no
  Object: no
  Function: yes

[A]lgorithm 

  - Define a function declaration 'stringToInteger' that has 1 parameter 'num'
  - Declare and intalize stringNum to the value of 'num' + 0
  - return the value of testing 'stringNum' to the the number equivalent of 'stringNum'

[C]ode with intent
*/

function stringToInteger(number) {
  const DIGITS = {
    0: 0, 
    1: 1, 
    2: 2, 
    3: 3,
    4: 4,
    5: 5, 
    6: 6,
    7: 7, 
    8: 8, 
    9: 9
  };

  let arrayOfDigits = number.split('').map((number) => {
      return DIGITS[number]
  });

  let value = 0; 
  arrayOfDigits.forEach((digit) => {
    return value = (10 * value) + digit;
  });
  console.log(value)
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true



