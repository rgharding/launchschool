function isPalindrome(str) {
  let revStr = str.split('').reverse().join('');
  return str === revStr;
}


function isRealPalindrome(str) {
  let regex = /[^a-z]/ig

  let newStr = str.toLowerCase().replace(regex, '');
  
 return isPalindrome(newStr)

}




console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false