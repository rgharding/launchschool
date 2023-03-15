/*
[P]roblem: given as string, switch the first and last letter of every word

input: string
output: string

  Rule: 
    - For every word in a string, switch the first and last characters of the word
    - Words less with a length less than two are returned as is

    Questions:
    - Does case of letter matter wheter it gets switched

[E]xample and test cases
  swap('Oh what a wonderful day it is') // 'hO thaw a londerfuw yad ti si' 
  swap('Abcde') // 'ebcdA' 
  swap('a') //  'a'
 
 input/output: GOOD

 Question Answers
  - Case does not matter

[D]ata structure
  array: yes
  object: no
  function: yes

[A]lgorthm

  - Define a function declaration 'swap' that has 1 parameter 'string'
  - Declare and intalize 'swapedWordsArray' to an empty array
  - Declare and inalize  'swapedWordsString' to an empty string
  - Define a loop that loops thur each word of the 'string' parameter
    - Declare and initlaize a variable 'swapedWord' 
    - set swaped word to the value of the last character in current word, 
        -concated with the portion of current word that does not inclued the first or last letter, 
        -conated with the first character of current word
    - add swapedWord to the 'swapedWordsArray'
  - reassign 'swapedWordsString' to the value of 'swappedWordsArray' joined
  - return 'swappedWordsString'
  
  [C]ode with intenet
  */


  function swap(string) {

    if (string.length < 2 ) {
      return string;
    }

    const wordsArray = string.split(' ');
    const swappedWordsArray = [];
    let swappedWordsString = '';

    for (word of wordsArray) {
      let firstLetter = word[0];
      let center = word.slice(1, word.length - 1)
      let lastLetter = word.slice(word.length - 1);
      
      let swappedWord = lastLetter + center + firstLetter
      swappedWordsArray.push(swappedWord);
    } 
      swappedWordsString = swappedWordsArray.join(' ');
     return swappedWordsString;
  }

  console.log(swap('Oh what a wonderful day it is')) // 'hO thaw a londerfuw yad ti si' 
  console.log(swap('Abcde')) // 'ebcdA' 
  console.log(swap('a')) //  'a'
 




