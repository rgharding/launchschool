/*
[P]roblem: given a string of words, return a string where each word that is longer than 4 chars will be reveresed

I/O
string
string

Rules: 
  - Return a string of words
  - every word that is longer than 4 chars needs to be reversed
  - Return string will be in original order


[E]xampls

I?O:  Looks good

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

[D]ata stuctures
- Array: yes
- Object: no
- HelpFunc: yes


[A]lgorithm

-Drfine a function declaration 'revWords' that has 1 paramenter 'str'
  -Declare and initalize 'revArr' to the result of 'str' mapped
    - define an if statement
        -if current mapped elements length is over 4
          return 'reverseIt'(currentElement)
        -else 
          - return element

  return revArr joined to a string

*/

function reverseWords(str) {
  let returnStr = str.split(' ').map(element => {
    if (element.length > 4) {
      return revIt(element)
    } else {
      return element
    }
  });

  console.log(returnStr.join(' '));
}


function revIt(word) {
  return word.split('').reverse().join('');
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"