/*
[P]roblem:  Given a number 'inputNumber', return the sum of all the numbers between 1 and inputNumber that are multiples of 3 and 5

Input- number
Output- number

Rules:
  Explicit
  1. The number range start from 1 and end with inputNumber inclusive
  2. The numbers to be summed are the numbers that are multiples of 3 and 5
  
  Implicit
  1. single number returned

Questions
  1. can input number be a negative


[E]xample Test Cases
  multisum(3) // 3 
  multisum(5) // 8
  multisum(10) // 33   


[A]lgorithm
  1. Define a function declaration 'multisum' that has 1 paremeter number
  2. Declare a variable 'multiples' and initalize it to an empty array.
  3. Define a for loop
      set counter to 1, conditional <= inputNumber, increment by 1 on each iteration
  4. Define an if statement. 
    if count  % 3 is 0  of if count % 5 is 0    
      add count to addMultiples
  5. declare and initalize a varaiable result to the value of adding all of the elements of the multiples array. 
  return result;

  [C]ode with intent
  */

function multisum(number) {
  let multiples = [];

  for (let counter = 1; counter <= number; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      multiples.push(counter);
    }
  }
  
  let result = multiples.reduce((acc, cv) => {
    return acc += cv;
  }, 0);

  return result;
}


console.log(multisum(3182)) // 3 
// console.log(multisum(5)) // 8 
// console.log(multisum(10)) // 33 
// console.log(multisum(1000)) // 234168 


