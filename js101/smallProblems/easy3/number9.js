function cleanUp(str) {
  let cleanText = '';

  for (let i = 0; i < str.length; i += 1) {
    if (isLowerCase(str[i]) || isUpperCase(str[i]) ) {
      cleanText += str[i];
    } else if (i === 0 || lastChar(cleanText) !== " ") {
      cleanText += ' '
    }
  }
  return cleanText;
  }

  function isLowerCase(letter) {
    return letter >= 'a' && letter <= 'z';
  }

  function isUpperCase(letter) {
    return letter >= 'A' && letter <= 'Z';
  }

  function lastChar(letter) {
    return letter[letter.length - 1];
  }

let x = "---what's my +*& line?" // " what s my line ";

console.log(cleanUp(x));