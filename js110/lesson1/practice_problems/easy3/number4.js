/*
[P]roblem: Given a number greater than 2 that represents the number of digits in a number. Find the index of the fibronacci number that has that many digits. 


input: number
output: number that represnts index of a number

Rules: 
  Explicit:
  1. input number must be greater that 2
  2. Return the index of the fibronacci number that has the same number of digits as the input number. 
  3. Use bigInt notation in solutions

  Implicit:
  1. 

[E]xample and test cases
  findFib(2n)           === 7n ;  //  
  findFib(3n)           === 12n ;  //
  findFib(10n)          === 45n ;  //
  findFib(16n)          ===  74n;  //
  findFib(100n)         ===  476n;  //
  findFib(1000n)        ===  4782n;  //
  findFib(10000n)       ===  47847n;  //
 

[D]ata structure
  Array: no
  Object: no
  Function: yes

[A]lgorithm
  1. Define a function declaration 'findFib' that take 1 parameter a 'number'.
  2.  *** Start a fibbronaci sequecnce ***
  3. Create a variable 'count' that increments on each fibb interation
  4. Convert the current result of the fibbronaci secuence to a string.
  5. Define an if statement.
    If the result string length is the same as number return  
      break the fibb sequence
  6. Return the value of count. 


  *** Fibonacci   ***
  Fib(n) = (n - 1) + (n - 2);   
  Create a variable fibCount and set it to 0;
  

  if n < 2 => fib = 0;
   else fib = (n - 1) + (n - 2)


  

  count = 1
  while fib's length < number
  n = 2
  fib = (n - 1) + (n - 2)

  n + 1
  count + 1

  return count

*/


function findFib(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fib;

  do {
    fib = first + second;
    count += 1n;
    first = second;
    second = fib;

  } while (String(fib).length < length);

  return count;
}


console.log(findFib(2n)     );//       === 7n ;  //  
console.log(findFib(3n)     );//       === 12n ;  //
console.log(findFib(10n)    );//       === 45n ;  //
console.log(findFib(16n)    );//       ===  74n;  //
console.log(findFib(100n)   );//       ===  476n;  //
console.log(findFib(1000n)  );//       ===  4782n;  //
console.log(findFib(10000n) );//       ===  47847n;  //
 