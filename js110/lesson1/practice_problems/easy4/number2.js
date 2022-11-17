/*
[P]roblem: given a string, return 'true' if the string is a Palindrome, or 'false' if is not. 

input: string
output: boolean

Rules:
  - String must be the same forward and backwards

Question:
  - Does Case on string matter?


[E]xample and Test Cases

  isPali('madam'); // true
  isPali('Madam'); // false
  isPali("madam i'm adam");
  isPali('356653');

Questions Answered:
  1. Case Does matter

 input/outputs look good 


[D]ata Structure
  Array: yes
  Object: no
  Function: yes


[A]lgorithm

  - Define a function declarartion 'isPali' that takes 1 parameter 'string'
  - Declare and intalize 'reverseString' to the value of string reversed
    ** sub routine **
  
  - define an if statement 
      if 'string' is equal to 'reverseString' return true
        else return false

    ** subroutine **
      loop thru the letters of the 'string' variable, adding each letter to reveseString. Add each letter to the begining of the array, not the end    

*/


function isPali(string) {
  let reverseString = [];

  for (letter of string) {
    reverseString.unshift(letter);
  }

 reverseString = reverseString.join('');

  if (string === reverseString) {
      console.log(true);
  } else {
    console.log(false);
  }

}


//isPali('madam'); // true
//isPali('Madam'); // false
//isPali("madam i'm adam"); // false
//isPali('356653'); // true

function pali(string) {
  return string === string.split('').reverse().join('');
}


console.log(pali('madam')); // true
console.log(pali('Madam')); // false
console.log(pali("madam i'm adam")); // false
console.log(pali('356653')); // true