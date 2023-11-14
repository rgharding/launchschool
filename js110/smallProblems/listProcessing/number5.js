/*
[P]roblem - Givens a string, return all of the substrings contained in the string. The subStrings shoule be orderd by the starting letter, and should be listed in an array from shortest to longest

Input - String
Output - Array of Substrings

Rules 
- input is a string
- output is an array of subStrings
- substrings should be orderd by index of begining letter
- substrings should be orderd from least to greatest


[E]xample and test cases

'abcde'
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ];

Input and Output: Looks Good!


[M] intermisson
  input string -> get subStings -> order substrings by index of starting letter -> get ordered substrings in array from least to greatest

[D]ata structure
  Funtion - yes
  Array - yes
  Object - no


[A]lgorithm 

  - make a funtion 'substing' with a paramater 'str'
  - make an array 'stringArray' and set to an empty array
  - loop thur the array so that each subString is created - should be a nested loop
    - loop 1 starts at index 0
      - loop 2 starts at index 1
        - declare and inatalize current stubString to an empty string
          - push currentSubString to stringArray


  return stringArray

*/

function orderArray(arr) {
  return arr.filter(element => element !== '');
}

function leadingSubstrings(str) {
  
  let strArr = []
  for (let i = 1; i <= str.length; i += 1 ) {
    let subString = str.slice(0, i);
    strArr.push(subString);
  }

  return strArr;
}

function substrings(str) {
  let newSubStrings = [];

  for (let i = 0; i < str.length; i += 1) {
    let stringSection = str.slice(i);
   newSubStrings = newSubStrings.concat(leadingSubstrings(stringSection));
    
  }

 console.log(newSubStrings);
}




substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ];