// Given a string with words spaces and ramdom non-alpha characters, return a string with only alpha charaters (words) with only 1 space between them, replace non-letters , with a space


function removeNonAlpha(str) {
  let regex = /[a-z ]/
  let lettersAndSpaces = ''

  for (let char of str) {
    if (regex.test(char)) {
      lettersAndSpaces += char
    } else {
      lettersAndSpaces += ' '
    }
  }

  return lettersAndSpaces
}

function removeMultipleSpaces(str) {
  let correctString = ''

  for (let i = 0; i < str.length; i += 1) {
    let currentChar = str[i];
    let nextChar = str[i + 1];

    if (currentChar === ' ' && nextChar === ' ') {
      continue;
    } else {
      correctString += currentChar;
    }
  }
  
  return correctString;
}

function cleanUp(str) {
  let onlyLettersAndSpaces = removeNonAlpha(str);
  let noMultipleSpaces = removeMultipleSpaces(onlyLettersAndSpaces);

  return noMultipleSpaces;
}

console.log(cleanUp("---what's my +*& line"));






