// given a string, swap the first and last letters of each wordArr[i] of the string

function swap(inputStr) {
  let wordArr = inputStr.split(' ');
  let swappedWordArr = [];

  for (let i = 0; i < wordArr.length; i += 1) {
    let word = wordArr[i]

    if (word.length === 1) {
      swappedWordArr.push(word);
      continue;
    }

     let firstLetter = word.slice(0, 1);
     let lastLetter = word.slice(word.length - 1);
     let middleLetters = word.slice(1, word.length - 1);
     let swappedWord = lastLetter + middleLetters + firstLetter
     
     swappedWordArr.push(swappedWord);
  }

  console.log(swappedWordArr.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"