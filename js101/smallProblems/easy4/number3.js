function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

function isRealPalindrome(str) {
    let testArray = filterString(str);

    let forward = testArray.join('').toLowerCase();
   
    
    
    return isPalindrome(forward);

}

function filterString(string) {
  let regex = /[a-zA-Z0-9]/
  let strArr = [];

  for (let letter of string) {
    if (regex.test(letter)) {
      strArr.push(letter);
    }
  }
  return strArr;
}


console.log(isRealPalindrome("madam"));
console.log(isRealPalindrome("Madam"));
console.log(isRealPalindrome("Madam, I'm Adam")); 
console.log(isRealPalindrome("356653"));
console.log(isRealPalindrome("356a653"));
console.log(isRealPalindrome("123ab321"));