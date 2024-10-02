/*
[P]roblem: Given a number, return the sum of the digits that make of the number

I/O:
number
number

Rules: 
  - Return the sum of digits of a number
  - Do not use any loop (for, while, do while)
  - Use a series of method call to solve problem

[E]xample

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45


[D]ata structure: 
Array: yes
Object: no
HelpFunc: maybe


[A]lgorithm
- Defince a function declaration 'sum' that has 1 paramenter 'num'
  - declare and iniatilze variable 'strArr' to an empty array to the value of 'num' converted to a string and split. 

  - declare and initalize a variable 'numArr' to the mapped value of 'strArr' with each string char conveted to a number'

  - return the value of numArr reduced to the sum of its parts
*/


function sum(num) {
  let numArr = String(num).split('').map((num) => Number(num));
  
  return numArr.reduce((acc, cv) => {
    return acc += cv
  } ,0);}


// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45




function sum2(num) {
 
  return String(num).split('').reduce((acc, cv) => {
    return acc += Number(cv); 
  } ,0);
 
 }

console.log(sum2(23));           // 5
console.log(sum2(496));          // 19
console.log(sum2(123456789));    // 45