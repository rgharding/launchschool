/*
[P]roblem: Write a function that takes a number and converts it to a string. Do not use Number to String method or an expression like " '' + number ". 

-input: number
-output: string

Rules: 
  - Input is a non negative number
  - Output is a string
  - Do not use an expression or built in method to convert

[E]xamples and test cases

  console.log(integerToString(4321)); // "4321"
  console.log(integerToString(0)); //  "0"
  console.log(integerToString(5000)); // "5000"
  console.log(integerToString(1234567890)); // "1234567890"


[D]ata Structure
  Array: yes
  Object: no
  Function: yes

[A]lgorithm
  - Define a function 'integerToString' that has 1 parameter 'num'/
  *** convert 'num' to a number
  - Declare and inatalize a variable 'digits' to an array of numbered strings starting from 0 to 9
  - Declare and initalize variable results to an empty string
  
  - Since 0 is an accetable input 
    - Define a do loop
    - Declare and initalize variable 'remainder' to the value of 'num' remainder 10
    - reassing number to the value of 'num' / 10  floored
    - reassign result to the value of digits at index remainder
    - Define the loop parameter to loop while num > 0
  -Return 'result

  */

function integerToString(number) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let results = '';

  
   do  {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    results = DIGITS[remainder] + results;
  } while (number > 0);
  
  return results;
}

  console.log(integerToString(4321)); // "4321"
  console.log(integerToString(0)); //  "0"
  console.log(integerToString(5000)); // "5000"
  console.log(integerToString(1234567890)); // "1234567890"