/*
[P]roblem: given a non-empty string console.log( the m )iddle character. If the string is even console.log( the 2 ) middle characters, if it is odd length console.log( just  )1 character

input- string
output- string

Rules: 
 Explicit
  1. Input cannot be empty
  2. For even length strings, console.log( middl )e 2 characters
  3. For odd length strings, console.log( middl )e character
  
  Implicit: 


  Question
    1. Does empty space count as a character?
    

[E]xample and test cases
  centerOf('I Love JavaScript'); // 'a' 
  centerOf('Launch School'); // ' ' 
  centerOf('Launch'); //  'un
  centerOf('LaunchSchool'); // 'hs
  centerOf('x'); // 'x'

  input/ouputs: look good

  Questions Answered
    1. Yes. Spaces count
  
[D]ata Structure
  Array: no
  Object: no
  Function: Yes will put it in a function

[A]lgorithm
  1. Define a function declaration 'centerOf' that has 1 parameter string
  2. Define an if statement
      if the length of inputString is even
        console.log( the m )iddle 2 characters of the inputString
      if the length of inputString is odd
        console.log( the m )iddle character of inputString
      
     *** how to determine the middle character  ***
     odd = 123 4 567 (length - 1) / 2 
     even = 123 45 678 (length / 2) - 1

 [C]ode with intent    
           
*/

function centerOf(inputString) {
  let length = inputString.length;
  
  if (inputString.length % 2 === 0) {
     let evenStartSlice = ((length / 2) - 1);
     let evenEndSlice = ((length / 2) + 1) 
    return inputString.substring(evenStartSlice, evenEndSlice);
  } else {
    
    let oddMiddle = ((length -1) / 2);
    return inputString[oddMiddle]
  }
}

console.log(centerOf('I Love JavaScript')); // 'a' 
console.log(centerOf('Launch School')); // ' ' 
console.log(centerOf('Launch')); //  'un
console.log(centerOf('LaunchSchool')); // 'hs
console.log(centerOf('x')); // 'x'