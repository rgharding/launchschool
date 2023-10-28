function doubleConsonants(str) {
  let regex = /[abcdfghjklmnpqrstvwxyz]/i

  let strArr = [];

  for (let i = 0; i < str.length; i += 1) {
      let letter = str[i];
      if (regex.test(letter)) {
        strArr.push(letter, letter)
      } else {
        strArr.push(letter)
      }
  }

  console.log(strArr.join(''));
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""