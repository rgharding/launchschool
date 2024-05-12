const WORD_NUMBERS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3, 
  four: 4, 
  five: 5, 
  six: 6,
  seven: 7,
  eight: 8, 
  nine: 9
}

function wordToDigit(str) {
  let strArr = str.split(' ');
  let NUM_KEYS = Object.keys(WORD_NUMBERS);
  let newStr = str;
  
  NUM_KEYS.forEach(word => {
    let regex = new RegExp( word, 'g');

    newStr = newStr.replace(regex, WORD_NUMBERS[word]);
  });
  
  console.log(newStr);
}



wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."