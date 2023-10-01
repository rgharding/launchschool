// write a function that tell if palindrome that is case insensitve

function isPalindrome(str) {
  return str.split('').reverse().join('') === str
}

function reverseString(inputStr) {
  return inputStr.split('').reverse().join('')
}

function isRealPalindrome(str) {
  let regex = /[a-zA-Z0-9]/
  let reverseStr = (reverseString(str));
  let justAlphaNum = ''

  for (let letter of reverseStr) {
    if (regex.test(letter)) {
      justAlphaNum += letter.toLowerCase()
    }
  }

  return isPalindrome(justAlphaNum)
  
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false