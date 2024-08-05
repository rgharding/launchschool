function isPalindromicNumber(num) {
  let numStr = String(num);

  return isPalindrome(numStr)
}


function isPalindrome(str) {
  let revStr = str.split('').reverse().join('');
  
  return str === revStr;
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true