/*
[P]roblem - Write a funciton that takes two strings. The function determines the lenght of the 2 strings and then retrurns the strings concateneted short string, long string, short string

input - 2 strings
output - 1 string

Eplicit rules
  - A single string is returned
  - The return order is short, long, short

Implicit rules
  - Only 2 seperate strings are allowed as input
  - inputs will be strings

Question: 
  1. Does there need to be a space between the strings
  2. What to do if strings are the same length
  3. What to do with an empty string, or a string of empty characters

 
[E]xamples and test cases
  'abc', 'defghij'  => 'abcdefghijabj'
  '', 'xyz' => 'xyz'

  Answers:
    1. Is seems empty strings are allowed
    2. No space between strings
    3. not answered

[D]ata structure
  Array: no
  Object: no


[A]lgorithm

 1. Declare/define a function declaration 'shortLong' that has 2 parameters 'string1', 'string2'
 2. Declare and initalize 'str1Length' to the value of the length of string 1
      - Repeat for string 2
 3. Declare and intalize variable 'result' to an empty string
 4. Delcare 2 variables long, short.
 5. Define an if statement. if sting1Length > string2Length than long is reassigned to string1 and short is reassiged to string to.
    else  - assign the opposite
 6. reassign the value of result to the concationation of short + long + short
 7. return results    
*/

function shortLong(str1, str2) {
  let result = "";
  let strLength1 = str1.length;
  let strLength2 = str2.length;

  let long = "";
  let short = '';

  if (strLength1 > strLength2) {
    long = str1;
    short = str2;
  } else {
    long = str2;
    short = str1;
  }
  result = short + long + short;
  return result;
}


console.log(shortLong('abc', 'defgh'))
console.log(shortLong('abcde', 'fgh' ))
console.log(shortLong('', 'xyz'))


// refactored

function shortLong2(string1, string2) {
  let long;
  let short;

  if (string1 > string2) {
    long = string1;
    short = string2;
  } else {
    long = string2;
    short = string1; 
  }
  
  return short + long + short;
}