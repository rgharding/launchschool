/*
[P]roblem: using multply function, write a function that squares a number given as an input.

  input: number
  output: number

  Rules
  Explicit:
  1. Square number entered using function 

  Implicit.
  1.


[E]xample test case
  5 => 25
  -8 => 64

 input/outputs look good


 [D]ata Structure
  Array: no
  Object: no
  Function: Yes


[A]lgorithm
  1. Define a function declaration 'square' that has 1 parmeter 'number'
  2. Inside our function call the 'multiply' function and pass in 'number' as an argument 2x.
  3. Declare a variable 'results' and intialize it to the return value of the multply function.
  4. return result

*/


function square(number) {
  let results = multiply(number, number);
  return results;
}

console.log(square(5));
console.log(square(-8));

function multiply(number1, number2) {
  return number1 * number2
}