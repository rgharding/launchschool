/* 
[P]roblem-  write a function that takes a string of words seperated by zero or more spaces and returns an object that shows the number of words of different sizes

input: string
output: object

  Rules
  1. Words are seperated by spaces
  2. Return object
  3. Object is word lengths and how many words are that lengthKey
    Implicit Rules
  1. Keys is word lengthKey
  2. Value is number of words of that lengthKey

  Questions
    1. Does punctuation count as part of word
    2. 


[E]xample and Test Cases

  input/output: look good

  Answer: Punctuation is included in word lengthKey

  console.log(wordSizes('Four score and seven.')) // {'3': 1, '4': 1, '5': 1, '6': 1 }
  console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')) // {3: 5, 6: 1, 7: 2 }
  console.log(wordSizes("What's up doc?")) // { 2: 1, 4: 1, 6: 1 }
  console.log(wordSizes('')) // {}

[D]ata Structure 

  Array: yes
  Object: yes
  Function: yes

[A]lgorithm

  - Define a function declaration 'wordSizes' that has 1 parameter 'string'
  - Declare and intalize 'wordArray' to the value of each word in 'string' as an array element
  - Declare and intalize 'wordCoundObject' to an empty object
  - Define a loop
      if 'wco' does not have prop (current index word lengthKey) add prop with value of 1
      if 'wco' has prop (current index word lengthKey)  add 1 to property
  - Return wco

[C]ode with intent

*/

function wordSizes(string) {
  let wordArray = string.split(' ');
  let wordCountObj = {};

  if (string.length === 0) {
    return wordCountObj;
  }

  wordArray.forEach( (word) => {
    let lengthKey = word.length;
    if (wordCountObj[lengthKey] === undefined ) {
      wordCountObj[lengthKey] = 1;
    } else if (wordCountObj[lengthKey]) {
      wordCountObj[lengthKey] = wordCountObj[lengthKey] += 1;
    }
  });

  return wordCountObj;
}



 console.log(wordSizes('Four score and seven.')) // {'3': 1, '4': 1, '5': 1, '6': 1 }
 console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')) // {3: 5, 6: 1, 7: 2 }
 console.log(wordSizes("What's up doc?")) // { 2: 1, 4: 1, 6: 1 }
 console.log(wordSizes('')) // {}



 