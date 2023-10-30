function doubleConsonants(str) {
  let doubleLetters = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  let newStr = ''

  for (let i = 0; i < str.length; i += 1) {
    newStr += str[i];
  
    if ( doubleLetters.indexOf(str[i].toLowerCase()) >= 0 ) {
      newStr += str[i];
    }
  }
  
  console.log(newStr);
}


//doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""