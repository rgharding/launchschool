/*
Modifying nested arrays:



*/

// Non-Nested Arrays:
let arr = [1, 2, 3, 4, 5];
arr[0] = 99
console.log(arr) // [99, 2, 3, 4, 5];
// This is Destructive



let nestedArr = [[1, 2, 3], [4, 5]]
nestedArr[1][0] = 99;
console.log(nestedArr) // [[1, 2, 3], [99, 5]];
// This is also Destructive