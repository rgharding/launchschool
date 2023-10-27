function repeater(str) {
  let newStr = ""

  for (let char of str) {
    newStr += char  
    newStr += char  
  }
  console.log(newStr)
}

//repeater('Hello');        // "HHeelllloo"
//repeater('Good job!');    // "GGoooodd  jjoobb!!"
//repeater('');             // ""


function repeaterLoop(str) {
  let strArr = []

  for (let i = 0; i < str.length; i += 1) {
    strArr.push(str[i], str[i]);
  }

  console.log(strArr.join(''));
};

// repeaterLoop('Hello');        // "HHeelllloo"
// repeaterLoop('Good job!');    // "GGoooodd  jjoobb!!"
// repeaterLoop('');             // ""


function repeaterMap(str) {
  let repeated = str.split('').map((char) => char + char).join('');
  console.log(repeated);
}


repeaterMap('Hello');        // "HHeelllloo"
//repeaterMap('Good job!');    // "GGoooodd  jjoobb!!"
//repeaterMap('');