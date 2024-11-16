/*
[P]roblem: write a function that determices is a number is prime;

I/O
number
boolean

Rules: 
  - return true if number is prime, false if it is not
  - A prime number is one that is divisible by 1 and itself
  - 1 is not a prime number


Examples:
I?O: looks good
see below

[D]ata Structure
Array: yes
Object: no
HelpFunc: no


[M]ental model intermission
  - get number -> loop from one to number -> divide number by current count of loop -> see if current count divided by number is even -> if it is add counter to an empty arr ->  check length arr -> return true if the length is 2, return false if the length is greater than 2


[A]lgo

- Define a function declaration 'isPrime' that has 1 paramenter 'num'
- define an if statement, 
    if number < 2 return false  

    - declare and initalize valriable 'evenDivisorsArr' to an emtpy array

  - define a for loop
    count = 1; count <= num; count += 1
    - define and if statement
      - if (num % count === 0)
        push count onto 'evenDivisorArr
  -** end of loop

  return loops length === 2    true or false
*/


function is_prime(num) {
  if (num < 2) return false; 
  
  let evenDivisorArr = [];


  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      evenDivisorArr.push(i)
    }  
  };

  return evenDivisorArr.length === 2 ? true : false
};




console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true