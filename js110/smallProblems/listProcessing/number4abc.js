/*
[P]roblem: givent a string, return all of the substrings into an array, the substring should be sorted by length, least to most

I/O: 
string
array of strings

Rules: 
  - return value should be an array of strings (subStrings) of input str
  - return array should be sorted from least to greatest in length


[E]xample and test cases

I?O: Looks good

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]  


[D]ata structure
Array: yes
Object: no
HelpFunc: no


[A]lgorithm

- Define a function declaration 'leadingSubStrings' that has 1 paramaner 'str'
  
  - declare and inialize a variable 'subStringsArr' to an empty arr; 
  - define a for loop
    - count = 1, conditional: count < str[length]; count += 1
        'subStringsArr' push the value of str value for start index 0 to i index 

  - return 'subStringArr' sorted by length of elements a[length] - b[length] (or what ever does that)
*/


function leadingSubstrings(str) {
  let subStringArr = [];

  for (let i = 1; i <= str.length; i += 1) {
    let subStr = str.slice(0, i);
    subStringArr.push(subStr);
  }

  return subStringArr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]