/*
[P]roblem: Of an integer 'number' greater that 0, Find the product of sum of all the number between that number and 0, 'number' included. 

input - number
output - number

-Question
 Should the product by found least to greatest or greatest to least?

[E]xample Test Cases

input number - 5 (sum) => 5 + 4 + 3 + 2 + 1  = 15
               5 (product) => 120   

Answers:
  product should be least to greatest;


[D]ata structure
  Array: no
  Object: no

[A]lgorithm

  1. Declare a function declaration 'sumOrProduct', that has 2 parametes (integer, (operation))
  2. Declare variable 'result;
  3. Declare a variable numberArray and set it to an empty array
  4. Define an for loop. 
      -count = 1, count <= integer, count increment by 1 on each iteration
      -add current count to number array
  5. Declare an if statement
      if operation is sum
      *** sub operation needed ***  
      add the numbers in the array together
      or else
        multipley the numbers in the array together 
  6.  resaaign result variable to the value of above step
  7. return result;

 *** sub operation ***
  -sum
    get a variable for the results, is adding set results to 0;
    loop thur the numbers array;
    on every loop, add the current number of the array to results
  
  -product
    get variable result and intalize to 1
    loop thur numbers in array from least to greates
    on every loop reassign result to rsult times current array number

[C]ode with intent


*/
// let sync = require('readline-sync');

// let number = Number(sync.question('Please enter an integer greater than zero: '));
// //console.log(typeof number);

// let operation = Number(sync.question('For Additon enter 1\nFor Multiplication Enter 2: '))
// //console.log(typeof operation);


// function productOfSum(integer, operation) {
//   let results;
//   let numberArray = [];

//   for (let count = 1; count <= integer; count += 1) {
//     numberArray.push(count);
//   }
  
//   if (operation === 1) {
//     results = numberArray.reduce((acc, cv) => {
//       return acc += cv
//     } ,0)
//   } else if (operation === 2) {
//     results = numberArray.reduce((acc, cv) => { 
//       return acc *= cv
//     } ,1)
//   } else {
//     results = "Please enter 1 for addition or\n2 for multiplication"
//   }
  
//   return results
// }

// console.log(productOfSum(number, operation))

let sumTotal = 0; 

for (let count = 1; count <= 5; count += 1) {
  sumTotal += count
}



let productTotal = 1; 
for(let count = 1; count <= 5; count += 1) {
  productTotal *= count
}

console.log(sumTotal);
console.log(productTotal);