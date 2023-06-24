function isPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

console.log(isPalindrome('madam')); // is
console.log(isPalindrome('Madam')); // Not
console.log(isPalindrome("madam i'm adam" )); // No
console.log(isPalindrome('356653')); // Is