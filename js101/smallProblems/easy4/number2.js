function isPalindrome(str) {
  let reverseString = str.split('').reverse().join('');
  if (str === reverseString) {
    console.log('true');
  } else {
    console.log('false');
  }
}



isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true