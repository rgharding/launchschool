function swap(str) {
  let strArr = str.split(' ');
  let swappedArr = [];

  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i].length < 2) {
      swappedArr.push(strArr[i]);
      continue;
    }

    let currentWord = strArr[i];
    let firstLetter = currentWord[0];
    let lastLetter = currentWord[currentWord.length - 1];
    let middle = currentWord.slice(1, currentWord.length - 1);

    let newWord = lastLetter + middle + firstLetter
    swappedArr.push(newWord);

  }

  return swappedArr.join(' ');
}




console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"