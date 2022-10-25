/*
[P]roblem - multiplying 2 numbers. Create a function that has 2 parmaeters and returns the result of those parameters multiplied together.


input - 2 numbers
output - 1 number

Explicit 
  -Func takes 2 numbers
  -Func multiplies
Implicit
  -Only 2 numbers are to be entered
  -Only operation it multiplication

Questions
  1. Are floating point numbers allowed
  

[E]xamples test cases
  func(5, 3) => 15

    Answers 
     None answered
    
[D]ata Structure
  Array: no
  Object: no
  Function: yes

[A]lgorithm
  1. Define a function declaration 'multiply' that takes 2 parametes "number1" "number2"
  2. Return the value of multiplying number1 to number2

[C]ode with intent
*/


function multiply(number1, number2) {
  return number1 * number2
}

console.log(multiply(3, 5) )