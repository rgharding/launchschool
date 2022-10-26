/*
[P]roblem - Write a program that returns the next to last word in a string. 

Input - string with minimun of 2 words
Output - single word

Explicit 
1. input will be minimum of 2 words
2. words are seperated by a space.

[E]xample Test cases
'Hello friend' ==> 'friend'

[D]ata structure
  Array: yes
  Object: no
  Function: yes

[A]lgorithm
  1. Define a funciton declaration 'secondToLast' that has 1 parameter 'string'
  2. declare a variable 'stringArray' and set it to the value of the element of the string converted to an array with spaces in the string being the criteria of elements in the array.
  3. return the second to last element of the array. 

[C]ode with intent
*/


function secondToLast(string) {
  let stringArray = string.split(' ');

  return stringArray[stringArray.length - 2];
}

