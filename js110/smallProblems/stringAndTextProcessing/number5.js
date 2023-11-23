const { _DBG_clearHistory } = require("readline-sync");

function swapCase(str) {
  let weirdStr = '';

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (/[a-z]/ig.test(char)) {
      if (char.toUpperCase() === char) {
        weirdStr += char.toLowerCase()
      } else {
        weirdStr += char.toUpperCase()
      }
    } else {
      weirdStr += char;
    }
  }

  console.log(weirdStr)
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"