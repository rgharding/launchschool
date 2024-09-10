/*
[P]roblem: given a number return the number in reverse order

I/O
number
number

-Rulse
- number must be in reverse order
- leading 0's will be elmiated

[E]xample and test

I?O's: Look good

(12345);    // 54321
(12213);    // 31221
(456);      // 654
(12000);    // 21 -- Note that leading zeros in the result get dropped!
(1);        // 1


[D]ata Structure: 

Array: no
Object: no
HelpFunc: no


[A]lgorithm

-Definae a function declaration 'revNumber' that has 1 parameter 'num'
  - declare and iniatlize a variable 'revNumber' to the value of  'num' beign made into a string
      -- split string
      -- reverse array
      -- join string

  - return revNumber

*/

function reverseNumber(num) {
  let revStr = String(num).split('').reverse().join('');
  let revNum = parseInt(revStr, 10);

  return revNum
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1