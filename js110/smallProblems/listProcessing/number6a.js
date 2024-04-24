function palindromes(str) {
  let subStringsArray = getSubStrings(str);
  let palindromesArr = findPalindromes(subStringsArray);  

  return palindromesArr;
}

function findPalindromes(subStringsArr) {
  return subStringsArr.filter((element) => {
    let forward = element;
    let backwards = element.split('').reverse().join('');

      return forward === backwards
  })
}

function getSubStrings(str) {
  let subStringsArray = [];

  for (let i = 0; i < str.length; i += 1) {
    for (let j = 1; j < str.length + 1; j += 1) {
       let subStrings = str.slice(i, j);
       subStringsArray.push(subStrings);   
    }
  }

    return subStringsArray.filter((element) => element.length >= 2);
}


console.log(palindromes('abcd'));       // []
//palindromes('madam');      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]