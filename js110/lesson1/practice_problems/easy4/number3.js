/*
[P]roblem: Given a string, determing if it is a palindrome. If it is return true, if not return false. With any given string ignore non-alphanumeric characters. 

input: string
output: boolean

 Rules: 
  1. check is string is palindrome
  2. do not count non-aplphanumberic characters
  3. return a boolean as answer
  4. Case does not count

Questions:
  1. Do spaces count non-alphanumeric characters
  

[E]xample and test cases

console.log(isPali('madam')) // true
console.log(isPali('Madam')) //  true
console.log(isPali("Madam, I'm Adam")) // true
console.log(isPali('356653')) // true
console.log(isPali('356a653')) // true
console.log(isPali('123ab321')) // false

input/output: GOOD

Answers: 
  Do not include space


[D]ata structure  
  Array: yes
  Object: no
  Function: yes

[A]lgorithm

  1. Define a function declaration 'isPali' that takes 1 paramter 'string'
  2. Declare and italize variable 'regex' to a regular expression:
      This regex should check for alphaNumeric charachter only
  3. Declare and intalize 'charArray' to an empty array
  4. loop thur the charaters of string
  5. in loop define an if statement
        if the character matches the regex add it to 'charArray'
  6. reverse 'charArray' and convert charArray into a string
  7. 'charArray' make all characters lowerCase
  
  8. define an if statement
      if charArr = string return true
        if not return false


*/

function isPalin(string) {
  let regex = /[a-zA-Z0-9]/ig
  let charArray = [];
  let revString;

  for (let character of string) {
    if (character.match(regex)) {
      charArray.push(character)
    }
  }
   
  let charString = charArray.join('').toLowerCase();  
    revString = charArray.reverse().join('').toLowerCase()
   
  if (charString === revString) {
      return true;
    } else {
      return false;
    }
}

console.log(isPalin('madam')) // true
console.log(isPalin('Madam')) //  true
console.log(isPalin("Madam, I'm Adam")) // true
console.log(isPalin('356653')) // true
console.log(isPalin('356a653')) // true
console.log(isPalin('123ab321')) // false//