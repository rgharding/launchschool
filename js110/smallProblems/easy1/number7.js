/*
[P] Make a function that tell if a day is a leap year
  input: number
  output: boolean

Rules: 
  - A leap year is any year divisible by 4
  - A leap year CANNOT be evenly divisible by 100 UNLESS the year is ALSO divisible by 400
  - Assume year entered will be greater that 0


[E]xample Test Cases

input/outputs look good

cosnole.log(isLeapYear(2016)); // true
cosnole.log(isLeapYear(2014)); // false
cosnole.log(isLeapYear(2100)); // false
cosnole.log(isLeapYear(2400)); // true
cosnole.log(isLeapYear(240000)); // true
cosnole.log(isLeapYear(240001)); // false
cosnole.log(isLeapYear(2000)); //  true
cosnole.log(isLeapYear(1900)); // false
cosnole.log(isLeapYear(1752)); // true
cosnole.log(isLeapYear(1700)); // false
cosnole.log(isLeapYear(1)); // false
cosnole.log(isLeapYear(100)); // false
cosnole.log(isLeapYear(400)); // true


[M]ental model intermission

declare func -> get year -> test if year divisible by 100 and 400 -> next check if divisible by 4 -> return true or false for either test


[D]ata Structure:

Array: No
Object: No
Function: Yes

[A]lgorithm
  - declare function declaration 'isLeapYear' that has 1 parameter 'year'
  - Define an if statement
    - if 'year' is divisible by 100 & 400
      - return true
    - if else 'year' is divisible by 4
      - return true
    - else 
      - return false


[C]ode with intent      
*/


function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false
  }
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2014)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); //  true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true
