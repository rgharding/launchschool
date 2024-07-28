/*
[P]roblem:  Given a number, return twice that number, unless the number is a doupble number;

I/O
number
number

Rules:
  - If number is double number return number as is
  - If NOT a double number return number * 2

Questions:
- What is a double number?


[E]xample:

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

I/O's look good

Question Answer: 
- A double number is the first half of the number is the same as the second half of the number. 
It's onloy for even numbers


[D]ata Structure
-Array: no
-Object: no
-HF: maybe


[A]lgorithm

  - create a function 'twice' that has 1 parament 'num'
    - declare and initalize an functon 'numStr' to the result of converting 'num' to a string
    - define an if statement
      - in numStr's length if odd return num * 2
      - else  
          return the value of isDouble ? num * 2 or num



  - create a function 'isDoble' that has 1 parame 'numStr'
    - declare and initalize variaoble 'firstHalf' to the value of the firstHalf of numbestr
    - declare and initalize variaoble 'secondHalf' to the value of the second half of numbestr

     return firstHalf === secondHalf 

*/

function twice(num) {
  let numStr = String(num);
return isDouble(numStr) ? num : num + num;
  
}

function isDouble(numStr) {
  let firstHalf = numStr.slice(0, numStr.length / 2);
  let secondHalf = numStr.slice(numStr.length / 2);

  return firstHalf === secondHalf

}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888)
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676//