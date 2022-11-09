/*
[P]roblem- given a number find out if it is Double Number. If it is a Double Number return the number as is. If it is not a Double Number, Return the number x 2. 

  A 'Double Number' is a number that the first half of the number is the same as the second half of the number. 

  Rules
    Explicit:
      1. If number is a double number, return the number
      2. If number is not a double number, return the number x2
    
    Implict: 
      1. odd length numbers return number x2

  Questions: 
    1. No questions now.


[E]xample and test Cases

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866 
console.log(twice(444)); // 888 
console.log(twice(107)); // 214 
console.log(twice(103103)); // 103103 
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

[D]ata Structure

Array: no
Object: no
Function: Yes

[A]lgorithm

- Define a function 'twice' that has 1 parameter 'number'
   
  *In the function*
 
- Declare and inatilze numAsString to the value of number converted to a string  
- Define an if statement, if numAsString length is not even, return number x2
- Decalre and intalize a variable firstHalf, to the first half of numAsString
- Declare and intalize a variable secondHalf, to the second half of numAsString
- Define an if statement, if first half = second half return number
    if first half !== second half, return number x2

[C]ode with intent
*/

function twice(number) {
 

  let numberAsString = String(number);
  let firstHalf = numberAsString.slice(0, (numberAsString.length / 2));
  let secondHalf = numberAsString.slice(numberAsString.length / 2);

  if (numberAsString.length % 2 !== 0) {
    return number * 2;
  }

  if (firstHalf === secondHalf) {
    return number;
  } else {
    return number * 2
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866 
console.log(twice(444)); // 888 
console.log(twice(107)); // 214 
console.log(twice(103103)); // 103103 
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676