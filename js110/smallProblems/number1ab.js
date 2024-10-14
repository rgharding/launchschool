/*
[P]roblem: given a string, return true if all of the alpha charactes are uppercase, false if not

I/O
string
boolean


Rules:
  - Return true if all alpha charaters are uppercase false if not
  - do not count non alpha characters


[E]xampls
I?O: looks good

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true


[D]ata structure
Array: yes
Object: no
HelpFunc: no


[A]lgo
- Define a function declaration 'isUppercase' that has 1 parameter 'str' 
  - declare and initalize a variable returnValue = true
  - declare and initalize variable 'regex' to the value of all letters

  - define a loop
    - if statment 
      - current char is a alpha by regex
        if current char !== current char uppercased
          return false

  - return returnValue



*/

function isUppercase(str) {
  let upperCaseString = str.toUpperCase()
  return str === upperCaseString;
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true