/*
[P]roblem: write a recursive function for fibbonaci secquence, when given a number, run the sequnce to return the nth(given) number of the sequence

I/O: 
number
number

Rules: 
  - use recursion to solve problem 
  - USE # RULES FOR RECURSIVE FUNCTIONS
    - Call its self at least once
    - has and ending condition
    - The result of each recursion are used in each step;

[E]xamples and test cases
I?O: Looks good

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765


[D]ata
Array: no
Object: no
HelpFunc: no


[A]lgo

- Define a function declaration 'fibonacci' that has 1 paramenter 'num'
  - defince an if statment 
    - if num === 1
      return fibb;

    - declare and initalize variable 'fibb'

      fibb = funcCall(num - 1) + function Call (num - 2);
  

*/

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765




