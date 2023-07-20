/*
Nested Data Structures

let arr = [[1, 3], [2]];

Both of the inner arrays are treated like individual elements of the arr array. They have index a values of 0 and 1.

The index of the elements can also be accessed in the same way. First determine what nested array we want to access, then what element of that nested array we want
*/

let arr = [[1, 3], [2]];
console.log(arr[0]) // [1, 3];

/*
The index of the elements can also be accessed in the same way. First determine what nested array we want to access, then what element of that nested array we want
*/

console.log(arr[0][0]) // 1
console.log(arr[1][0]) // 2