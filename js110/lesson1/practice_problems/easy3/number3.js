/*
[P]roblem: give a positive integer, write a funciton that returns a string of alternating 1's and 0's. The string should always start with 1, and the string should be the length of the positive integer. 

 input: number
 output: string the length of number
 
 Rules: 
  1. String should always start with 1
  2. String should be the length of the argument

Questions
  none

[E]xample and test cases
console.log(stringy(6)) //  '101010'
console.log(stringy(9)) //  '101010101'
console.log(stringy(4)) //  '1010'
console.log(stringy(7)) //  '1010101'


[D]ata Structure
  Array: no
  Object: no
  Function: yes

[A]lgorithm
  1. Define a function delcaration 'stringy' that has 1 parameter 'number'
  2. Declare and intalize a variable 'result' to an empty string
  3. Define a varible 'count' and set it to 0;
  4. Define a while loop
      while count < number
  5. Define an if statement
      if count is even    add '1' to result
      if count is odd add  '0' to result
  6. increment count by 1
  7 return result

[C]ode with intent

*/

function stringy(number) {
  let result = '';
  let count = 0;

  while (count < number) {
    if (count % 2 === 0) {
      result += '1';
    } else {
      result += '0'
    }
    count += 1;
  }
  return result
}

// console.log(stringy(6)) //  '101010'
// console.log(stringy(9)) //  '101010101'
// console.log(stringy(4)) //  '1010'
// console.log(stringy(7)) //  '1010101'


function newStringy(number) {
  let result = ""
  for (let i = 0; i < number; i += 1) {
    let addChar = (i % 2 === 0) ? '1' : '0';
    result += addChar
  }
  return result;
}


console.log(newStringy(6)) //  '101010'
console.log(newStringy(9)) //  '101010101'
console.log(newStringy(4)) //  '1010'
console.log(newStringy(7)) //  '1010101'


