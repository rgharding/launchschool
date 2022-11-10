/*
[P]roblem: write a function that takes that average of 3 numbers and assigns them a letter value, ie a Grade Book. 

input: numbers
output: string

Rules: 
1. Letter grade is assined based avergage of 3 number input
 

Questions:
  1. Do numbers need to be whole or are decials allowed on inputs


[E]xample Test Cases

console.log(getGrade(95, 90 93)) // "A"
console.log(getGrade(50, 50 95)) // "D"

Input/Outputs: look good


[D]ata Structure
  Array: no
  Object: no
  Function: yes


[A]lgorithm
  - Define a function definition 'getGrade', that has 3 parameter, num1, num2, num3;
  - Declare an undefined variable result;
  - Decalare and intalize a variable 'average' to the value of all 3 parameters added and divided by 3
  - Declare a switch statement that uses average as the switch statement. 
  - Use the provided Grade range to make if statement
  -return result

[C]ode with intent
*/


function getGrade(num1, num2, num3) {
  let result;
  let average = (num1 + num2 + num3) / 3
  
  if (average < 60) {
    result = 'F';
  } else if (average < 70) {
    result = 'D';
  } else if (average < 80) {
    result = 'C'; 
  } else if (average < 90) {
    result = 'B'
  } else if (average >= 90 ) {
    result = 'A'
  }

  return result;
} 
console.log(getGrade(95, 90, 93)) // "A"
console.log(getGrade(50, 50, 95)) // "D"