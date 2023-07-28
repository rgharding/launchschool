/*
Previously we copied arrays the were 1 level deep using the slice and spread syntax method. 

What happens when we use those on nested arrays, meaning array within arrays?

let arr = [[1], [2], [3]];


*/

let arr1= [[1], [2], [3]];
let arr2 = [...arr1];

//console.log(arr1);  // [[1], [2], [3]]
//console.log(arr2);  // [[1], [2], [3]]   
//console.log(arr1 === arr2); // false

/*
So far so good. 
Let's investigate further!
*/


arr2[0][0] = 1111;
console.log(arr1) // [[1111], [2, [3]]];
console.log(arr2) // [[1111], [2, [3]]]

arr2[0] = 99;
console.log(arr1); // [[1111], [2], [3]];
console.log(arr2); // [99, [2], [3]];


/*
What this is showing us is only the first level of elements are copied with the slice and spread syntax ways of copying an array. 

The nested elements both share the same pointers to their nested values.
*/