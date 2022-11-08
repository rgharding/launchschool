/*
[P]roblem: write a function that makes ascii art. The function has 1 parameter 'number' which will be the base of the triangle length. The triagle's hypotenues will go from right to left. 

input: number
output: several lines of strings

Rules
  explicit
  1. Create a right triangle
  2. The base of the triange will be number
  3. The triangle hyptonoues from base will go left to right

[E]xample Test Cases
  *
 **
***

input/outputs: look good

Answer to questions not written
  -What character to use to make triange => *


[D]ata structure

  Array: no
  Object: no
  Function: Yes

[A]lgorithm

  1. Define a function declaration 'triangle' that has 1 parameter 'number'
  2. define a for loop
    counter = number, counter less than number, counter plus 1 on each iteration.
  3. declare and intalize variable 'white space' to 0
  4. log to the console on each iteration '*' repeated 'counter' of times
  5. increment white space by 1.

*/

/*
    *
   **
  ***
 ****
***** 

*/


function triangle(number) {
 let whiteSpace = number - 1; // 4
 let star = 1 //  
 
  while (star <= number) {
    console.log(`${' '.repeat(whiteSpace) +  '*'.repeat(star)}`)
    whiteSpace -= 1;
    star += 1
  }
}


triangle(5);