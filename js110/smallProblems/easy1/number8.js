/* make a new leap year calendar same as before with modifications

Rules: 
if Year is before 1752 any year divided by 4 is a leap year

if year is 1752 or later previous rules follow
  - cannot be divisible by 100 is NOT ALSO divisible by 400
  - Divisible by 400
  - divisible by 4 

*/

function isLeapYear(year) {
  if (year <= 1752 && year % 4 === 0) {
    return true;
  } 
  
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true
  } else {
    return false;
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
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true














