function crunch(str) {
  if (str.length <= 1) {
    return str;
  }

  let noDoublesStr = ''
  
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      noDoublesStr += ''
    } else {
      noDoublesStr += str[i];
    }
  }
  
  return noDoublesStr;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""