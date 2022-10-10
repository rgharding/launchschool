/*
[P]roblem: write a function that has 1 parameter (a number) and returns true if the values absolute number is odd and false is it is not odd.

input: number
output: boolean

Questions:
1. what is an absolute number

[E]xample and test cases

  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true
  console.log(isOdd(-8)); // => false
  console.log(isOdd(0)); // => false
  console.log(isOdd(7)); // => true

  input/outputs look good

[D]ata Structure
  array: no
  object: no

[A]lgorithm
  1. decare a function declaration "isOdd" that has 1 parameter "num"
  
  *** sub ***
  2. declare a variable 'absoluteNum' and set it to the absolute value of num 
  3. declare a variable result;
  4. declare and if statement
    - if statement test whether the remainder of number / 2 is 0 or 1
    - if absolueNum is odd reassing result to true, is even reassign result to odd
  5. return result


** sub ** 
to get absolute value of a number => num * num / (non negative)num
--javascript Math.abs(num) 
*/

function isOdd(num) {
  
  let absoluteNum = Math.abs(num);
  let result = absoluteNum % 2 != 0 ? true : false

  return result;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true