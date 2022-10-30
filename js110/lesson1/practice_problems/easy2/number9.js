/*
[P]roblem: write a program that genrates a random number (an age) between 20 and 120 inclusive

input: method/function call
output: string the stay randomly generated number

Rules
 Explicit
  1. Range is inclusive

 Implicit:
  1. Whole number as it is an age. 

Question
 1. Double check if whole number


[E]xample
'Bob is 67 years old!'


[D]ata Structure

  Array: no
  Object: no
  Function: maybe


[A]lgorithm
  1. Declare and intalize variable 'age' to the value of random Age that of our criterial
  2. get a random number between 20 - 120
  3. log to the console a string that includes the 'age' variable
  
[C]ode with intent
*/

function randomNumber(minNum, maxNum) {

  if (minNum > maxNum) {
    let newMinNum = maxNum;
    let newMaxNum = minNum;

    minNum = newMinNum;
    maxNum = newMaxNum;
  }

  console.log(minNum, maxNum);
let age = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; 
  console.log(`Bob is ${age} years old!`);
};

randomNumber(3, 1);
