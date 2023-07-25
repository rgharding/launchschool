/*
SHALLOW COPY:

Array.prototype.slice() - with no arguments, creates a shallow copy of an array. 

*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.slice();
console.log(arr1 === arr2 ) // false

arr2[0] = 99;
console.log(arr1) // [1, 2, 3, 4, 5];
console.log(arr2) // [99, 2, 3, 4, 5]


/*
This show that this is not the same array. 
The pointers in arr1 do not point to the same primitive values as the pointers of arr2



*/

