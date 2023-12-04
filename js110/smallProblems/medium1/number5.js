let wordToNumObj = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',

}

let regex = new RegExp(/[a-z]\./i);

function wordToDigit(str) {
  let strArr = str.split(' ');
  let newStr = ''
  
  strArr.forEach(word => {
    if (regex.test(word)) {
      let newWord = word.replace('.', '');
      if (wordToNumObj[newWord]) {
        newStr += `${wordToNumObj[newWord]}${word[word.length - 1]} `
      } else {
        newStr += `${newWord}${word[word.length - 1]} `
      } 
    } else if (wordToNumObj[word]) {
      newStr += `${wordToNumObj[word]} `
    } else {
      newStr += `${word} `
    }
  });

  console.log(newStr)
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."