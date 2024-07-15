/*
[P]roblem: given 2 values, return true if only 1 of the values is truthy;

rules
 - return true of only 1 out of 2 values is truthy
 - return false if both values are valsy or truthy

 i/o 
 2 values of any kind
boolean


[E]xamples
i/o's look good

onsole.log(xor(5, 0) === true);           // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true


[D]ata structure
Array: no
Object: no
HelperFunc: no


[A]lgorithm

  check the two values

  A      B
  convert the first value to opposite.
  
  place and or sign
and do the same thing on the other side with the opposite value
  

*/

function xor(param1, param2) {
  return !param1 && param2 || param1 && !param2 ? true : false;
}


console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true