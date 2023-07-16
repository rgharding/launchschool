/*
Copying an array: 
  - An array can be copied by using the SLICE method arr.slice() with no aruguments. This can be assined to a new variable and it will provide that  variable with a pointer to the new array; 
*/


let vowels = ['u', 'i', 'a', 'e', 'o']

let newVowelsSliced = vowels.slice().sort();  // Using the slice method creates a shallow copy of vowels.
console.log(vowels);  // vowels has NOT be changed
console.log( newVowelsSliced); // sorted array will be logged to console


let sortedVowels = vowels.sort(); // ['a', 'e', 'i', 'o', 'u'];  This is destructieve for the vowels array
console.log(sortedVowels); // sorted array will be logged to the console
console.log(vowels) //['a', 'e', 'i', 'o', 'u']; // this array has been called by a destructive method and has been changed
