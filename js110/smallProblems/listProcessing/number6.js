function palindromes(inputStr) {
  let inputStringArray = inputStr.split(' ');
  let subStringArray = []

  inputStringArray.forEach((word) => {
    subStringArray = subStringArray.concat(getSubStrings(word))
  })

   return isPalindrome(subStringArray);
}




function getSubStrings(inputWord) {
  let returnArr = [];

  for (let i = 0; i < inputWord.length; i += 1) {
    for (let j = 1; j <= inputWord.length; j += 1) {
      let word = inputWord.slice(i, j)
      if (word !== '') {
        returnArr.push(word)
      }
    }
  }

  return returnArr;
}



function isPalindrome(arr) {
  let palindromeArr = arr.filter(element => {
    if (element.length > 1) {
      let fwd = element;
      let rev = element.split('').reverse().join('');
    
    if (fwd === rev) {
      return element;
      }
    }
  });
  
  return palindromeArr;
}



console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

//console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

//console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]