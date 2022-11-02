/*
[P]roblem - write a function that has 1 parameter 'number'. If the number is positive return the negative of that number. If the argument in negative return as-is


input - number;
output - number;

Rules: 
  1. Take a number input and return a negative number

Question: 
 1. Will these be integers only?


[E]xamples and test cases
  console.log(negative(5)) // -5  
  console.log(negative(-3)) // -3
  console.log(negative(0)) // -3

  input/output: looks good

[D]ata Structure
  Array: no
  Object: no
  Function: Yes

[A]lgorithm
  1. Define a function declaration 'negative' that has 1 parameter 'number' 
  2. ** Decalare and intalize 'absoluteValue' to the absolute value of number;
      if number < 0 
        number * - 1;
      if number > -1 
        number
  3. Return -absoluteValue ;

  ** How to get abosolute value of number
    if number < 0 
    number * -1
    if number > 0
      number
    

[C]ode with intent
*/

function negative(number) {
  let absoluteNumber;

  if (number < 0) {
    absoluteNumber = number * - 1
  } else {
    absoluteNumber = number;
  }
 
   return -absoluteNumber;
}


function absMethod(number) {
  let absoluteValue  = Math.abs(number);
  return absoluteValue * -1
}


function absMethodTernary(number) {
  return number < 0 ? number : number * -1;
}

  // console.log(negative(5)) // -5  
  // console.log(negative(-3)) // -3
  // console.log(negative(0)) // -3


  // console.log(absMethod(5)) // -5  
  // console.log(absMethod(-3)) // -3
  // console.log(absMethod(0)) // -3


  console.log(absMethodTernary(5)) // -5  
  console.log(absMethodTernary(-3)) // -3
  console.log(absMethodTernary(0)) // -3
