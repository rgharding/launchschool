/*
[P]roblem - take an input of any number greater than 0 and determine if its a leap year. 

input - number greater than zero
output - boolean

- Rules To Determine Leap Year:
  -Explicit: 
    1. If year is evenly divisible by 4
    2. Year cannot be evenly divisible by 100 unless it is also divisible by 4
  
  - Implicit:

  Question: 
    1. Is there a limit how great of a year we can input
  

[E]xample and test cases
  
  isLeapYear(2016) // true
  isLeapYear(2015) // false
  isLeapYear(2100) // false
  isLeapYear(2400) // true
  isLeapYear(240000) // true
  isLeapYear(240001) // false
  isLeapYear(2000) // true
  isLeapYear(1900) // false
  isLeapYear(1752) // true
  isLeapYear(1700) // false
  isLeapYear(1) // false
  isLeapYear(100) // false
  isLeapYear(400) // true

  Answers:
  1. seems to be able to enter large years


[D]ata structure
  Array: No
  Object: No
  Function: Yes  

[A]lgorithm
  1. Define a funciton declaration 'isLeapYear' that has 1 parameter 'year'
  2. Declare and intitialize variable 'result' to false;
  3. Declare/Define an if statement
      if year is divisible by 4 and 400 result = true
  4. return result

[C]ode with intent

*/

function isLeapYear(year) {
  let result = false;

  if (year % 400 === 0) {
    result = true;
  } else if (year % 100 === 0) {
    result = false;
  } else if (year % 4 === 0) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
} 

isLeapYear(2016) // true
isLeapYear(2015) // false
isLeapYear(2100) // false
isLeapYear(2400) // true
isLeapYear(240000) // true
isLeapYear(240001) // false
isLeapYear(2000) // true
isLeapYear(1900) // false
isLeapYear(1752) // true
isLeapYear(1700) // false
isLeapYear(1) // false
isLeapYear(100) // false
isLeapYear(400) // true


// Refactored 

function isLeapYearRefactored(year) {
  if (year % 400 === 0 ) {
    return true 
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}