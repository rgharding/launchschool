function isRealPalindrome(str) {
  let regex = /[a-z0-9]/i
  let strArr = []

  for (let i = 0; i < str.length; i += 1) {
    if (regex.test(str[i])) {
      strArr.push(str[i].toLowerCase());
    }
   }
      
      return strArr.join('')  === strArr.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false