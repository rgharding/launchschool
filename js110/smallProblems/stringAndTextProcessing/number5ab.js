/*
[P]roblem: Given a string, return a new string with upprer and lower case numbers swapped.

I/O:
string
string

Rules:
  - swapped only alpha charaters uppers and lower cases
  - all non alpha charaters remain the same

[E]xamples and test cases

I?O: Looks Good

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

[D]ata Structure
Arrray: yes
Object: no
HelpFunc: no


[A]lgorithm

-Define a function declaration 'swapCase' that has 1 variable 'str'
  - declare and initalze variable 'regex' to a value of all alpha chars upper/lower
  
  - declare and initalize variable 'newStrArr' to the value of 'str' made into an array mapped over
    - in the map interations
    
    *** nestedMap 
    - devlare a variable newWord to the value of mapping over current word  split/made into an array of charates
        - if (current char passes regex test)
            - if current char == current char.toUppercase 
              - return currentChar lowerCase
            else 
              - return currentChar upperCase

              return nested map joined.
      *** end nestd map    

      return newStrArr joined 
*/

function swapCase(str) {

  let newStrArr = str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() 
      } else {
        return char
      } 
  });

  return newStrArr.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"