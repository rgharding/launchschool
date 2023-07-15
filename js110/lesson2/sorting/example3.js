/* 
Sort converts to string and the puts in order of unicode
Consider the following
*/

let x = ['arc', 'bat', 'cape', 'ants', 'cap'];
let y = x.sort();

// What will the following log?

console.log(x) // ['arc', 'bat', 'cape', 'ants', 'cap'];
console.log(y) // ['ants', 'arc', 'bat', 'cap', 'cape'];


/*
  Correct Answer;
    - console.log(x) // ['ants', 'arc', 'bat', 'cap', 'cape'];
    - console.log(y) // ['ants', 'arc', 'bat', 'cap', 'cape'];


    Explanation: 
      Sort is a DESTRUCTIVE method. Even though it is returning the results of sort to a new array, the original array is sorted as well
*/