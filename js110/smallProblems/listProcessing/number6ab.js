/*
[P]roblem: given a string, return an array that contains all of substring palindrones

I/O:
string
Array of palindrones substrings

Rules: 
  - Palins are case sensitive
  - palins are 2 letters or more
  - place palins in array in order of appearance
  - duplicates are allowed


[E]xamples

I?O: Look Good

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]



[D]ata Stucture
Array: yes
Object: no
HelpFunc: yes


[A]lgoRithm

**Get subString from first Letter

-Decalre and iniatlize function 'firstLetterSubstr' that has 1 parameter (str)
  - Declare and inialize varibale 'subStrArr' to an empty array
  -Define a for loop
    -count = 1; count < str[length]; count += 1
    - declare and initalize variable 'currentSubstr' to the value of str sliced from 0 to count
    - push the value of 'currentSubstr onto 'subStrArr'

  - return subStrArr

**Get subString from all letters
- Define a function 'allSubStr' that has 1 paramenter ('str')
  - declare and inialize variable 'allSubStringsArray' to an emptyArr
  - define a for loop
    -count = 0; count < str[length]; count += 1
    - declare and initiate variable 'currentStr' to the value of 'str' sliced by 'count'
    - concat or join the return value of invoking the 'firstLetterSubstr' func with 'current' str passed as variable to 'allSubStringsArray' ;


  - return 'allSubstringsArr'



  ** isPalindrome
- Define a function declaration 'isPalindrome' that has 1 parameter 'arr'
  - declare and initiate 'palins' to an empty arr

  - define a for loop or map over 'arr' parameter
    - let currentWordReveres = 'theCurrentWord' reversed
    - Define an if statement
      if (currentWord === reversedWord)
        push currentWord onto palins

  return palins




***MAIN Function
-Define a function declaration 'palindromes' that has 1 paramenter 'str'
  - Declare and initalize variable 'subStrArr' to the return value of passing 'str' as argument to 'allSubStr'

  return the return value of 'subStrArr' passed as an argument to 'isPalindrome' function
*/


function firstLetterSubs(str) {
  let subs = [];
  for (let i = 1; i <= str.length; i += 1) {
    subs.push(str.slice(0, i));
  }

  return subs
}


function allSubStr(str) {
  let allSubstringsArr = [];

  for (let i = 0; i < str.length; i += 1) {
    let currentString = str.slice(i);
   allSubstringsArr = allSubstringsArr.concat(firstLetterSubs(currentString));
  }

  return allSubstringsArr
}



function isPalindrome(arr) {
  return arr.filter((subStr) => {
    let revSub = subStr.split('').reverse().join('')
      return subStr === revSub
  });
}

function palindromes(str) {
  let allsubStringsArray = allSubStr(str).filter((substr) => substr.length >= 2);
  
  return isPalindrome(allsubStringsArray);
  
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ] 