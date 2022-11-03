/*
[P]roblem: Write a fucntion that takes a string and returns a new string that contains the value of the original string with all consecutive characters collapesed into a single character. 

input- string
output- string

Rules
  Explicit
    1. Given a string any character that repeats, colapse into 1 character
    2. Finals string should have no repeating characters
  
  Implicit
    1. Spelling may be incorrect on final string

Question
  1. How do we treat empty strings
  2. How do we treat strings with 1 character


[E]xamples and test Cases

  crunch('ddaaiillyy ddoouubbllee'); // 'daily double'
  crunch('4444abcabccba'); // 4abcabcba 
  crunch('ggggggggggg'); // 'g'
  crunch('a');  // "a"
  crunch('');  // ''

Answers:
  1. Empty string returns empty string
  2. Single character returns single character

[D]ata structure
  Array: yes
  Object: no
  Function: yes


[A]lgorithm
  1. Define a function 'crunch' that has 1 parameter 'string'
  2. Declare and inatlize variable 'characterArray' to the result of splitting put the 'string' value into seperate elements
  3. Declare and initialize result to the first element of 'characterArray'
  4. Define a for loop
      counter = 1, counter < characterArray's length, increment counter 1 on each interation
  5. Define an if statement
    1: if characterArray at current count = charachter at current count - 1, continue
     else  characterArray at current count != charachter at current count - 1, add characterArray current element to results
  6. return the value of results made into a string 
        
*/


function crunch(string) {
  if (string.length <= 1) {
    return string;
  }
  
  let characterArray = string.split('');
  let result = [];
  result.push(characterArray[0]);


  for (let counter = 1; counter < characterArray.length; counter += 1) {
    if (characterArray[counter] === characterArray[counter - 1]) {
      continue;
    } else {
      result.push(characterArray[counter])
    }
  }


  return result.join('');
 }

// console.log(crunch('ddaaiillyy ddoouubbllee')); // 'daily double'
// console.log(crunch('4444abcabccba')); // 4abcabcba 
// console.log(crunch('ggggggggggg')); // 'g'
// console.log(crunch('a'));  // "a"
// console.log(crunch(''));  // ''



function crunchString(string) {
  let result = ""

  for (let counter = 0; counter <= string.length - 1; counter += 1) {
    if (string[counter] !== string[counter + 1]) {
      result += string[counter];
    }
  }
  return result
}


console.log(crunchString('ddaaiillyy ddoouubbllee')); // 'daily double'
console.log(crunchString('4444abcabccba')); // 4abcabcba 
console.log(crunchString('ggggggggggg')); // 'g'
console.log(crunchString('a'));  // "a"
console.log(crunchString(''));  // ''
