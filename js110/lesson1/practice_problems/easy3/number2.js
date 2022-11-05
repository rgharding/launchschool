/*
[P]roblem - write a function that takes a short line of text and write it to the console in within a box

input- string
output - string inside of asci art that is a box

Rules: 
  Explicit
    1. String will be place inside of ascii art box
  Implicit
    1. Based of example. The first line and last line will be the same
    2. There will be an empty line between the text both before and after line of text
    3. The length of the box will be 4 characters longer than the string
  
  Questions:
    1. Do the characters of the box have to be the same as in the example?


[E]xample and test cases
  string: 'Hello, I am Richard Harding a software engineer'

  +-------------------------------------------------+
  |                                                 |
  | Hello, I am Richard Harding a software engineer |
  |                                                 |
  +-------------------------------------------------+


[D]ata Structure
  Array: no
  Object: no
  Function: yes



[A]lgoritm
  1. Define a funciton declaration 'logToBox' that has 1 paramter 'string'
  2. Declare and initalize varible 'length' to the length of 'string'
  3. Delaclare and italize 'firstAndLastLine' to the string '+ +' with the "-" character repeated length + 2 inbetween them 

  4. Declare and intalize "bufferLine" to the string of "||" seperated by empty space to the sum of length + 2
  5. Declare and intalize 'writing' to the string "| +" " + string + " " + |"

  6. Log to the console the variables is the following order:
    firstAndLastLine
    bufferLine
    writing
    bufferLine
    firstAndLastLine


[C]ode with intent
*/


function logToBox(string) {
  let length = string.length;

  let firstAndLastLine = `+${'-'.repeat(string.length + 2)}+`;
  let bufferLine = `|${' '.repeat(string.length + 2)}|`;
  let text = `| ${string} |`
  
  console.log(firstAndLastLine);
  console.log(bufferLine);
  console.log(text);
  console.log(bufferLine);
  console.log(firstAndLastLine);

} 

logToBox('I am Richard Harding, Apple SoftWare Engineer ')