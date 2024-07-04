/*
[P]roblem: given a number that represents a year. Determine if that year is a leap year or not

input: number
output: boolean

rules: 
  - if year is evenly divisible by 4 and also 100 it is NOT a leap year
  - if year is evenly divisible by 400 it IS a leap year
  - ALL other years evenly divisible by 4 are leap years

 
[E]xample and test cases

I/O's look good

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true


[D]ata structure
- Array: no
- Object: no
- HelperFunc: no

[A]lgo
- Define a function declaration 'isLeapYear' that has 1 paramenter 'year'
- delcalre and initalize variable 'returnStatement' to false  
- Define an if Statement
    -if (year) is evenly divisible 4 AND 400 return true
    - else if (year) is evenly divisible by 4 AND year is evenly divisible by 100 return false
    - else if (year) is evely divisible by 4 return true

- return returnStatement    

[C]ode with intent

*/

function isLeapYear(year) {
  

  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return  year % 4 === 0 
  } 
   
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true