/*
[P]roblem: Given a string, return the string in reverse order;

I/O:
string
string

Rules:
  - String will be reversed order


[E]xample: 

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"


[D]ata Structure: 

Array: yes
Object: no
HelpFunc: no


[A]lgoRitm

-Defina function declaration 'revSententce' that has 1 parameter 'str'
  -Define an if statement
    -If str's length is 0
      reutrn str
    - else 
        return str split into an arrya, order reversed and joined with a space;

  
*/

function reverseSentence(str) {
  if (str.length === 0) {
    return str;
  } 

  let revWords = str.split(' ').reverse().join(' ')
  return revWords
};

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"