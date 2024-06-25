/*
[P]roblem: given a number, determine if number is odd;

I/O
number
boolean

Rules: 
- number may be positive of negative
- return true or false


[E]xample and test
  2 --> false
 -3 --> true

[D]ata structure
Array: no
Object: no
Helper Func: no

[A]lgo
- create funtion with 1 param
  - convet param to absolute value
  - return the boolean of testing remainder of value divided 2 is 1

[C]ode with intent

*/


function isOdd(num){
  return Math.abs(num) % 2 === 1
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true