/*
[P]roblem: given a string, write a function that returns the string with all non alpha characters replaced with a space.

I/O: 
string
string

Rules:
  - the return value will be a string with spaces and alpha charaters only
  - all non alpha charaters should be replaced by an empty space
  - there should be no consecutive spaces in the final string.


[E]xample and test cases

cleanUp("---what's my +*& line?");    // " what s my line "

I/O: look good



[M]ental model intermission

  cylcle thru string -> determine if current charater is alpha -> replace non alpha char or keep alpha charater -> add to new string -> return new string



[D]ata Strurcture

Array: no
Obj: no
HF: yes ?

- Helper function to eleminate consectutive spaces;



[A]lgorithim

- define a function declarations 'cleanUp' that has 1 parameter 'str'
  - declarare and initalize variable 'withSpaces' to and empty string
  - declare and initalize variable 'regex' to be a range of values that conating only alpha chars
  - define a loop for or for/of
    - define an if statement
      - if regex current char
        - add current char to 'withSpaces'
      - if not
        - add empty str to 'withSpaces'

  return the value of 'noDupSpaces' with 'withSpaces' passed as argument


*Helper Function

- define a function declaration 'noDupSpaces' that has 1 parameter 'inputStr' 
  - declare and initalize variable 'finalStr' to an empty str
  - define a for loop
    - counter to begin at 1, conditinal count < inputst's length, increment by 1/iteration
    - define an if statement
      - if current char is an ' ' and previous char is ' '
        - replace space with '' an empty space or push empty space to 'finalStr'
      - else
        - push current char to 'finalStr' 

    - return finalStr

*/


function cleanUp(str) {
  let regex = /[a-z]/i
  let withSpaces = ''

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];

    if (regex.test(char)) {
      withSpaces += char
    } else {
      withSpaces += ' ';
    }
  }

  return noDupSpaces(withSpaces);
};


function noDupSpaces(inputStr) {
  let finalStr = inputStr.slice(0, 1);

  for (let i = 1; i < inputStr.length; i += 1) {
    if (inputStr[i] === ' ' && inputStr[i - 1] === ' ') {
      finalStr += '';
    } else {
      finalStr += inputStr[i];
    }
  }

  return finalStr;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "