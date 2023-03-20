/*
[P]roblem: write a function the check whether a number is a palindrome. If it is, return true, if it is not return false

input- number
output- boolean

Rules: 
  - input must be a number integer
  - output must be a boolean

Question:
  no question


[E]xample and test cases

console.log(isPali( 34543 )) // true
console.log(isPali( 123210 )) // false
console.log(isPali( 22 )) // true
console.log(isPali( 5 )) // true

input/outputs: look good


[D]ata structure
  Array: yes
  object: no
  Function: yes


[A]lgorithm
  - Define a funciton declaration 'isPali' that has 1 paramete 'num'
  - Declare and intalize a varibale 'numAsString' to the value of num converted to a string. 
  - ** Declare and intalize a variable to 'reversedNum' and set it to the value of 'numAsString' reversed **
      Sub-routine
        -If built in revese method is available use that
  - Define an if statement
      if 'numAsString' equals 'reversedNum' 
        return true
          else return false


[C]ode with intent
*/


function isPali(num) {

  const numAsString = String(num);
  const reversedNum = numAsString.split('').reverse().join('');
  
  if (numAsString === reversedNum) {
      return true;
  } else {
    return false
  }
}

// console.log(isPali(12345)) // false
// console.log(isPali(34543)) // true
// console.log(isPali( 123210 )) // false
// console.log(isPali( 22 )) // true
// console.log(isPali( 5 )) // true


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



function isPali(num) {
  let numAsString = String(num);
  return isPalin(numAsString);
}



console.log(isPali(12345)) // false
console.log(isPali(34543)) // true
console.log(isPali( 123210 )) // false
console.log(isPali( 22 )) // true
console.log(isPali( 5 )) // true