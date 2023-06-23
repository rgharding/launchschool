/*
Adding elements to a nested array
*/


let arr = [[1], [2]];
arr[0].push([3]);
console.log(arr) // [[1, [3]], [2]]
// This gives is a 3 layer array
// This is DESTRUCTIVE

console.log(arr[0][1]) // [3]