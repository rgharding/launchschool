/*
[P]roblem: Given a string, return all of the substring to an array. The substring should be listed in order of appearance by their first letter

I/O: 
string
Array of substings

Rules:
  - return array of substrings should be in order of appearace/ first letter


[E]xamples

I?O: looks good

'abdce' =>
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]


[D]ata structure
Array: yes
Object: no
HelpFunc: yes: leadingSubstring



[A]lgorithm

** Helper funciton leadingSubstring

-Define a function declaratioan 'subStrings' that takes 1 paratmenr 'str'
  - declare and iniatlize a variable 'allSubStrings' to an empty array []

  - define a for loop
    -counter = 0; conditional: counter < str[length]; counter += 1
    - declare and initalize varioable 'currentStr' to the value of str. sliced with count
    - allSubStrings = allSubstrings concated to the return value of 'leadingSubstring( currentStr )


  - return allSubstrings

*/

function leadingSubstring(str) {
  let returnSubStrings = [];

  for (let i = 1; i <= str.length; i += 1) {
    returnSubStrings.push(str.substring(0, i));
  }

  return returnSubStrings
}



function substrings(str) {
  let allSubs = [];

  for (let i = 0; i < str.length + 1; i += 1) {
    let currentStr = str.substring(i)
    allSubs = allSubs.concat(leadingSubstring(currentStr));
  }

  return allSubs;
}


//console.log(substrings('abcde'));


function substings2(str) {
  let strArr = []
  
  str.split('').map((char, index) => {
     strArr.push(leadingSubstring(str.slice(index)).join(', '));
  })

  return strArr;
}


console.log(substings2('abcde'))
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]