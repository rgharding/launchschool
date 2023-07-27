/*
SPEAD SYNTAX

A more modern way of copying an array is using the spread syntax

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [...arr1];

the ... preceding arr1 is the spread syntax. What this does is it goes thru the array and playces a copy of each element into the new array. 

*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];

console.log(arr2) // [1, 2, 3, 4, 5];
console.log(arr1 === arr2) // false

arr2.push(99);
console.log(arr1) // [1, 2, 3, 4, 5]
console.log(arr2) // [1, 2, 3, 4 ,5, 99]