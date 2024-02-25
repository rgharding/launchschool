function stringy(num) {
  let newStr = ""

  for (let i = 1; i <= num; i += 1) {
    let number = i % 2 === 0 ? 0 : 1
    newStr += number
  }

  return newStr;
}


console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"