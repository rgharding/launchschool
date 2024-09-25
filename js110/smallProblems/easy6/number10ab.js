/*
[P]roblem:  Given a string, return true if all of the parethesis in the problem are properly balanced

I/O: 
string
boolean


Rules:
  Balanced parens
  - first parens must be (
  - last parens must be )
  - all parens must be even
  - ( parens must equal ) parens


[E]xample and test cases

isBalanced("What (is) this?") === true
isBalanced("What is) this?") === false
isBalanced("What (is this?") === false
isBalanced("((What) (is this))?") === true
isBalanced("((What)) (is this))?") === false
isBalanced("Hey!") === true
isBalanced(")Hey!(") === false
isBalanced("What ((is))) up(") === false


I?O:
Looks Good


[D]ata structure

Array: yes
Object: maybe
HelpFunc: yes


[A]lgorithm

- Define a function declaration 'isBalanced' that has 1 paramenter 'str' 
  - declare and initaiate variable regex to ();
  - declare and initaiate varable 'parens' to the return value of **getParens()** with str as variable
  - declare and initalize count to 0
  
  - define a for loop
    - let i = 0; i < parens's length; i += 1
      if (parens[count] === '(' ) 
        count += 1
      else if (parens[count === ')' ) {
        count -= 1;

        if (count < 0) {
          return false;
        }
    --- End for loop
  
    return count === 0;    
      }
  
 

** define a function declaration getParens() that has 1 variable 'str'
  -declare and initate variable 'parensArr' to an empty array 
  - define a for of loop
    - loop thur each character
      - if char === regex
          push char onto 'parens'

  return 'parensArr'

*/


function isBalanced(str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      count += 1
    } else if (str[i] === ')') {
      count -= 1;
    }

    if (count < 0) {
      return false;
    }

  }

  return count === 0;
}





console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);