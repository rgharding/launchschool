/*
[P]roblem - create a program that take 2 postivie intergers and prints the result of those 2 integers in several mathematical operations , + - / * % ** power

input - 2 numbers
output - 1 number

[E]xample test cases
4, 2
6 +
2 -
8 *
2 /
0 %
16 **

input outputs look good

[D]ata Structure
  Array: no
  Object: no

[A]lgorithm
  1. declare and intitate a variable number1 to users input
  2. declare and intitate a variable number2 to users input

  3. Output the following
    number1 operation number2 
    with the following operation  + - * / % **


 [C]ode with intent   

*/

let sync = require('readline-sync');

let number1 = sync.question('Please enter a positive integer: ');
let number2 = sync.question('Please enter another positive integer: ');

console.log(`${number1} + ${number2} =  ${number1 + number2}`)
console.log(`${number1} - ${number2} =  ${number1 - number2}`)
console.log(`${number1} / ${number2} =  ${number1 / number2}`)
console.log(`${number1} * ${number2} =  ${number1 * number2}`)
console.log(`${number1} % ${number2} =  ${number1 % number2}`)
console.log(`${number1} ** ${number2} =  ${number1 ** number2}`)