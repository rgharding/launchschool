/*
[P]roblem: this is a continuation of the previous leapYear prob. Diffence is that prior to 1752 ALL years evenly divisible by 4 are leap years.

Rules: 
Prior to 1752 all years divisible by 4 are leap year.
Not after 1752 the previous rules follow, 
  - year divisible by 400 are leap years
  - years divisible by 100 are NOT leap years
  - years divisible by 4 are all leap year if above conditions are met.

I/O
  -number
  -boolean


Questions: 
  how to treae 1752 if it is a leap year?
  

[E]xample and test Cases

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
  

I/O: Look GOOD


[D]ata Structure
  Array: no
  Object: no
  HelperFunc: yes


[A]lgo

- Define a function declaration 'isLeapYear' that has 1 parameter 'year'
  - define and if statement (if year > than 1752) {
    return the result of 'HelperFunction ' with year passed in as argument
    - else {
      return reaminder of year / 4 is equal to 0 
    }


- Define a function declaration 'yearGreaterThan1752' that has 1 paramenter 'year'
    define and if statement
      - if year remainde 400 === 0  => return true
      - else if  year % 100 === 0 AND year % 4 === 0 => return false
      - else return year % 4 === 0


code with intent     
*/


function isLeapYear(year) {
  if (year >= 1752 ) {
    return yearIsGreater(year);
  } else {
    return year % 4 === 0;
  }
}


function yearIsGreater(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0
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
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true)
