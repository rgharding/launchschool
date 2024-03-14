function swap(str) {
  if (str.length <= 1) {
    return str;
  }

  let strArr = str.split(' ');
  
  let swappedStr = strArr.map(word => {
    return swapWord(word);
  })

  return swappedStr.join(' ');
}


function swapWord(word) {
  let wordArr = word.split('')
  let firstLetter = wordArr.shift();
  let lastLetter = wordArr.pop();

  wordArr.push(firstLetter);
  wordArr.unshift(lastLetter)
   let swappedWord = wordArr.join('');
   
   return swappedWord;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"