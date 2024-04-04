function repeater(str) {
  let newStr = ''

  for (let char of str) {
    newStr += char +char
  }

  console.log(newStr)
}



repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""