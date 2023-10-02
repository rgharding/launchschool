// Determine if is a palidrome number

function isPalindrome(str) {
  let justAlphaNumString = justAlphaNum(str);
  let revStr = justAlphaNumString.split('').reverse().join('');
    return justAlphaNumString === revStr;
}

function justAlphaNum(inputStr) {
  let noGarbage = inputStr.toLowerCase().replace(/[^a-z0-9]/g , "");
   return  noGarbage;
}

function isPalindromicNumber(inputNum) {
  return isPalindrome(String(inputNum))  
  
 
} 



console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true