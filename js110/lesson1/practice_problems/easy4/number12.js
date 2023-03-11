/*
[P]roblem: Convert a signed number to a string. Create a function that converts negative and non-negative numbers to strings. Do not use any of the standard conversion methods ie toString or String.

input: number
output: string

Rules
  - input will be an integer
  - output will be a number
  - The sign, positive or negative will preceed the number string characters
  - 0 will not have a sign


Questions: 
  1. Make sign for all non zero numbers


[E]xample and test cases
  
  input/output: look good

console.log(signedIntegerToString() === "") // false
console.log(signedIntegerToString() === "") // false
console.log(signedIntegerToString() === "") // false

[D]ata Structure
  Array: yes
  Object: no
  Function: yes


[A]lgorithm

  *** 2 function Solution **

  **FUNCTION 1 SINGED INTEGER TO STRING **
    - Define a function 'signedIntegerToString' that has 1 parameter 'number' 
    - Declare and initalize a variable 'result' to an empty string
    - Define an if statement
        if number is 0 
          result = integerToString with number as argument
        if else number > 0
          result = '+' + integerToString with number as argument
        if else number < 0
          result = '-' + integerToString with number as argument
    - Return result      


  ** FUNCTION 2 INTEGER TO STRING
  - Define a function declaration 'integerToString' that has 1 parameter 'number'
  - Declare and initalize a variable 'DIGITS' to an array. The array will be strings of numeric characters that represent the current index is '0', '1', '2'   for characters 0-9
  - Declare and initalize a variable result to an empty string. 
  - Define a do while loop. 
      - Declare and initalize a variable 'remainder' to the value of number % 10
      - reassign the value of number to  number / 10 rounded down
      - reassign 'result' to the value of result + remainder
      - Do this while 'number' > 0
    -Return result;

*/

function integerToString(number) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    result = remainder + result
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  let result = '';

  if (number === 0) {
    result = integerToString(number);
  } else if (number > 0) {
    result = '+' + integerToString(number);
  } else if (number < 0) {
    
    result = '-' + integerToString(-number)
  }
  return result
}


console.log(signedIntegerToString(4321) === "+4321") // true
console.log(signedIntegerToString(-123) === "-123") // true
console.log(signedIntegerToString(0) === "0") // true