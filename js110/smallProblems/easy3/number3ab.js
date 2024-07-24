function stringy(num) {
  let newStr = '';
  
  for (let i = 0; i < num; i += 1) {
    i % 2 === 0 ? newStr += '1' : newStr += '0'
  }

  return newStr;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"