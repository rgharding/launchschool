/*
[P]roblem: Given a string that includes non-alphabetic characters, write a function that returns the string with the non-alph characters replaced by a space. If there is more that 1 non alpha character in a row, replace them all with only 1 space. The resulting string should not have consecutive spaces.

input: string
output: string

Rules: 
  1. replace all non-alpha characters with a space
  2. if more than 1 non-alpha characters repeat, replace them all with a single space
  3. there should not be double spaces in the final string
  

[E]xample and test cases
  cleanUp("---what's my +*& line") // " what s my line"

  input/outputs: look good

[D]ata structure;

  Array: yes
  Object: yes
  function: yes

[A]lgorithm

  - define a function declaration 'cleanUp' that has 1 parameter 'string'
  - declare and initalize newString to an empty string;
  - declare and initalize stringArray to the value of string with every character its own element. 
  - declare and intalize a variable 'regexAlpha' that reconizes alphavalues.
  - declare and intalize a variable 'regexSpaces' that recognizes spaces.

  - define a for loop
      counter starts at 1
      condition: loops while counter is less that stringArray's length
      counter increments 1 on each iteration
  
  - define an if statement
      if current count is a alpha AND currnet count - 1 is aplpha
          continue
      if current count is space AND current count - 1 is alpha
          continue
      if current count space AND current count - 1 is non alpha
        replace current count - 1 with an empty string
      if current count is alpha AND current count - 1 is non alpha
        replace current count - 1 with a space ' '

    - return newString

[C]ode with intent

*/


function cleanUp(string) {
  let newStr = [];
  let strArr = string.split('');
  let space = ' ';
  let regexAlpha = /[a-zA-z]/g
  
  for (let count = 0; count < strArr.length; count += 1) {
    if (string[count].match(regexAlpha)) {
      newStr.push(string[count]);
     } else if( !(string[count].match(regexAlpha)) && string[count + 1] === space) {
       continue;
     } else if ( !(string[count].match(regexAlpha)) && !(string[count + 1].match(regexAlpha))) {
      continue;
     } else if ( !(string[count].match(regexAlpha)) && string[count + 1].match(regexAlpha)) {
        newStr.push(space);
     }
  }

  return newStr.join('');
}


console.log(cleanUp("---what's my +*& line")) // " what s my line"