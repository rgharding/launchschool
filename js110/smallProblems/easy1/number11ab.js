/*  
[P]roblem: Given a string, write a function that returns the sum of all of the UTF-16 characters that make up the string;

I/O-
String
Number

Rules: 
  - This input will be a string
  - Output will be a number of the sum of the utf characters

Question: 
  - Do we include that value of spaces?


E]xamples

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811


[D]ata Structure:
  Array: maybe
  Object: no
  HelperFunction: no


[A]lgo

Define a function declaration 'utf16Value' that has 1 parament 'str'
  - declare and initaize a variable 'sum' to the value 0 
  - Define a for loop
    - counter = 0
    - while counter < the length of str
    - inclrment the counter by1
      : on each iteration add the utfValue at index counter to the value of sum


  return sum
*/

function utf16Value(str) {
  let sum = 0;
  
  for (let index = 0; index < str.length; index += 1) {
    sum += str.charCodeAt(index);
  }

  console.log(sum);
}

//utf16Value('Four score');         // 984
//utf16Value('Launch School');      // 1251
//utf16Value('a');                  // 97
//utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811