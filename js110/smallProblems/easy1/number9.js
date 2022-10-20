/*
[P]roblem: Make a leap year calender that treats years before 1752 differennt that year 1752 onwards. Prior years are any year evenly divisible by 4 is a leap year. Years after 1752 follow that only year divisble by 4 or 400 are leap year. Years that end in 100 are not considered leap years after 1752.

input - year 
output = boolean

Rules.
  1. Years before 1752 are a leap year on any year evenly divisible by 4
  2. Years after 1752 are leap years under the following condition
    Evenly Divisible by 4 and 400
    Year years ending in 100 are not leap years

  Questions

[E]xample and test cases:

  input/outputs: Look Good!

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


[D]ata Structure
  Array: no
  Object: no
  Function: yes


[A]lgorithm:
  1. Define a function declaration 'isLeapYear' that has 1 parameter 'year'
  2. Declare and intalize variable 'result' to the value of false
  3. Declare an if statment - 
      if year < 1752  if true proceed
        if year divided by 4 is 0  
          reassign result to true
      
  4. Declare second if statment for years 1752 and greater    
    if year % 400 is true
      result = true
    else if
      year % 4 === 0 &&  year % 100 !== 0
  5. return result
*/

function isLeapYear(year) {
  let result = false;
  if (year < 1752) {
    if (year % 4 === 0) {
      result = true;
    }
  }

  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    result = true;
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