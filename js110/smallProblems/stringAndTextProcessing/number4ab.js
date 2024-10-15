/*
[P]roblem: given a sting of words seperated by a space, return a new string with each words first charater capitolized and all others char lowercase.

I/O:
string
strring

Rules: 
  - a word is any string of chars seperated by a space
  - return value will include spaces
  - words will be retrurned with first letter capitolized and all other letters lowercase

[E]xample and test
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'


[D]ata structure
array: yes
object: no
HelpFunc: no


[A]lgorithm

- Define a function declaration 'wordCap' that has 1 parameter 'str' 
  - declare and initalize variable 'newSentence' to an empty array 
  - declare and initalize a variable 'wordArr' to the value of str seperated by ' '
    - define a for loop
      'count' 1; condition 'count' < 'wordArr[letngth]'; 'count' += 1
      - declare and initalize variable 'fistLetter' to the value of slicing first letter off of 'wordArr'[count]
      - declare and initalize vareiabtl 'restOfWord' to the value of sliceing the second and remeintin letters of 'wordArr[count]'
      - declare and initalize 'newWord' to the value of firstLetter[upperCase] + restOfWord[lowerCase]
      - push value of 'newWord' onto 'newSentence' array
    ** End of loop
    
    return 'newSentence' joined by a space

*/


function wordCap(str) {

  let strArr = str.split(' ');

  let newSentence = strArr.map(word => {
    let firstLetter = word.slice(0, 1).toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
  }).join(' ')

  return newSentence
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'