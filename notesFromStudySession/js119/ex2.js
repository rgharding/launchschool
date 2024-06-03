// Your job is to write a function which increments a string to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number, the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo42 -> foo43
// foo9 -> foo10
// foo99 -> foo100

console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"

/*
Input: a string
Output: a string

Rules: 
- Increment the end number of input string by 1
- If the string does not end with a number, add 1 to the new string

D:
array: to store characters from the input string 

A: 
- conver the input string to an array of characters 
- increment the last character by 1 

  - convert the input string to an array of characters assign the result to charsArr  
  -- convert the last character to a number, assign the result to isNumber  
  -- if isNumber increment its value by 1 
  -- otherwise add 1 to the end of tha charsArr 
  -- convert the charsArr back to a string, reassign the input string to the result  
  - return string 

*/
