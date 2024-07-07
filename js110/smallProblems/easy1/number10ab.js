/**
 [P]roblem:  given a number, greater that one, write a function that computes the sum of all numbers that are multiples of 3 or 5 between 1 and the given number (inclusive)

 I/O 
  number; 
  number;
 
Rules: 
  -Compute the sum of all numbers that are multiples of 3 or 5
  - return the sum of those numbers
  - the input number is inclusive in the multiples if it is a multiple
  
  ** Question: Is 1 included in the sum???

[E]xample and test cases

I/O: Look Good;

Question: 1 is NOT included in the sum;

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168



[D]ata structure:
Array: Maybe
Object: no
HelperFunction: no


[A]lgorithm

- Define a function declaration 'multiSum' that has 1 paramenter 'num'
  - Declare and initalize a variable 'sum' to the value of 0;
  - Define a for loop
    -counter = 1
    - condition loop while counter is <= num; 
    - increment by 1 on each iteration
    - define an if statement
      - If counter is divisible by 3 or 5  
        : add counter to sum

    return sum;

[C]ode with intent
 
 */


function multisum(num) {
  let sum = 0;

  for (let counter = 1; counter <= num; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter
    }
  }
  
  return sum;
};

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168