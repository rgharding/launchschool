/*
[P]roblem: write a function that takes an array of numbers and it returns an array with the same amount of numbers, but each number is the value of a running total from original array.

input: array of numbers
output: array of numbers

Rules: 
  1. input is an array of numbers
  2. output array with same amount of elements as input
  3. output elements are a running total of input elements


[E]xample and test Cases
  runningTotal([2, 5, 13]); // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
  runningTotal([3]); // [3]
  runningTotal([]); // []

input/outputs: look good

[D]ata Structure

  Array: yes
  Object: no
  Function: yes


[A]lgorithm

  - Define a function declaration 'runningTotal' that has 1 parameter 'inputArray'
  - Declare and intalize 'outputArray' to an empty array []
  - Set outputArray index 0 to the value of index 0 of inputArray
  - Define a for loop
      count is 1, 
      loops while count is less that inputArray's length
      increment count by 1 each iteration
  - set 'outpurArrays' current index of count, to value of 'inputArray''s current count index + 
      'inputArray' count - 1 value
  - return 'outputArray

 [C]ode with intent 
*/


function runningTotal(inputArray) {
  let outputArray = []
  
  if (inputArray.length < 1) {
    return outputArray;
  }

 outputArray[0] = inputArray[0];

 for (let index = 1; index < inputArray.length; index += 1) {
  outputArray[index] = inputArray[index] + outputArray[index - 1];
 }

  return outputArray;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []



function runningTotal2(inputArray) {
  let outputArray = [];
  let sum = 0;

  for (let i = 0; i < inputArray.length; i += 1) {
    outputArray[i] = sum += inputArray[i];
  }

  return outputArray;
}

console.log(runningTotal2([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal2([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal2([3])); // [3]
console.log(runningTotal2([])); // []