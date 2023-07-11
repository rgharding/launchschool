// Create an object that expresses the frequency with which each letter occurs in this string:

/*
[P]roblem: Given a string, create an object the has the key a letter and the value the number of times it is in the string. 

input: string
output: object where the keys represent the characters in the string and the values are the amount of times they are in the string;

Questions: 
  1. Does capitolization matter
  2. Does white space and punctuation matter


[E]xample and test cases:

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

  Questions answered:
    -Capitolization does matter


[D]ata Structure

  array
  object: yes


[A]lgorithm


0. Remove white space from string.
1. Declare an object letterCount and set it to an empty object;
2. Declare an intalize a variable 'count' and set it to 0.
3. Declare a for loop 
  a. intalize the counter to 0; count till counter < the length of string, increment counter by 1 each iteration
4. Deaclare and intalize a variable regEx to the value of string at current count.
5. Declare letterArray and initalize it to an empty array. (if no method can do the following);
6. Seach string for matching values of the regex and add those to an array. 
7. Set obj letterCount's key to the current string value and the value to the length of the array returned by the regex matching.
*/

let statement = "The Flintstones Rock";
let stringNoSpaces = statement.split('');
console.log(stringNoSpaces)
let obj = {};

stringNoSpaces.forEach((char) => {
  obj[char] = obj[char] || 0;
  obj[char] += 1;
});


PACHYDERM

console.log(obj);





