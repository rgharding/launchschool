function doubleConsonants(str) {
  let regex = /[bcdfghjklmnpqrstvwxyz]/i
  let newStr = "";

  for (let char of str) {
    if (regex.test(char)) {
      newStr += char + char   
    } else {
      newStr += char
    }
  }

  console.log(newStr);
}


//doubleConsonants('String');          // "SSttrrinngg"
//doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
//doubleConsonants('July 4th');        // "JJullyy 4tthh"
//doubleConsonants('');                // ""


function doubleConsonants2(str) {
  let CONSTS =  ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
  let newStr = ''

  for (let i = 0; i < str.length; i += 1) {
    newStr += str[i];
    
    if (CONSTS.indexOf(str[i].toLowerCase()) >= 0) {
      newStr += str[i];
    }
  }

  console.log(newStr);
}

doubleConsonants2('String');          // "SSttrrinngg"
//doubleConsonants2('Hello-World!');    // "HHellllo-WWorrlldd!"
//doubleConsonants2('July 4th');        // "JJullyy 4tthh"
//doubleConsonants2('');                // ""
