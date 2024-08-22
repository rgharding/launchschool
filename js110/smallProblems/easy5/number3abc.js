/*
[P]roblem: given an array, split the array in half and return to a new array, each half of the original array, in its own array.

I/O
arr
nested array with 2

Rules: 
- Return array will always have two arrays
- The input looks like it will always be an array, even if it empty


[E]xamples 

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


[D]ata Structure
Array: yes
Object: no
HelperFunc: no


[A]lgoRithm

-Define a function declaration 'halvsies' that has 1 parameter 'inputArr'
  
  - Declare and initalize a variable 'returnArr' to an empty array with 2 arrays nested
  - Declare and initalize a variable 'arrLength' to the length of 'inputArr'
  - Declaer adn initalize a variable 'firstHalf' to the value of the first half contents of 'inputArr'
  -Declaer adn initalize a variable 'secondHalf' to the value of the second half contents of 'inputArr'
  
  - combine the 'firstHalf' with the 0 index nested array of 'returnArr'
  - combine the 'secondHalf' with the 1 index nested array of 'returnArr'

  - return 'returnArr'


*/

function halvsies(inputArr) {
 
  let halfLength = Math.ceil(inputArr.length / 2);
  
  let firstHalf = inputArr.slice(0, halfLength);
  let secondHalf = inputArr.slice(halfLength);

 

  return [firstHalf, secondHalf];
}


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]