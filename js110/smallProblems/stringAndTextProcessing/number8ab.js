/*
[P]roblem: given a string, return an array that contains a string of each word in the string and of the length of the word.

I/O:
string
array of strings

Rules: 
  - return value should be an array of strings.
  - return value string, should be a word, followed by a space and a number.
  - in arguemtn is an empty str, or no argument passed, an empty array should be the return value.
 

[E]xample

I?O: 
Look goods good

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

[D]ata structure: 
Array: yes
Object: no
HelpFunc: no


[A]lgoritm

- Define a fucntion declaration 'wordLengths' that has 1 parameter 'str'
   - declare and initiate variable 'wordArr' to an empty array;

   - split 'str' into an array divided by spaces
    - define a for loop with split 'str' value
      - on each loop 
        - declare and initalize variable 'wordCountStr' to an 'template literal' 
          - template literal will be  the following format 'word (space) wordCount'
          - push value of wordCountStr onto 'wordArr'


  - return 'wordArr'
*/


function wordLengths(str) {
  let wordArr = [];

  if (str) {

  str.split(' ').forEach(word => {
    let wordCountStr = `${word} ${word.length}`
    wordArr.push(wordCountStr)
  })
  }
  
  console.log(wordArr);
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []