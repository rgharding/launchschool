let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// arr1 => [ {first: 42}, ]

/*
This will output `[{ first: 42 }, {second: 'value2'}, 3, 4, 5]`
On line 2 arr is declared and initialized to the return value of `arr1.slice()`.
The slice method returs a shallow copy of the selected portion of the prototype that called it. 
In that case it return the entire array. Because `arr1` is an array, the variables share the same 
pointer to the value of `arr1`. On line 3 when `arr2` mutates the first index of the array, which is an object, 
and updates the objects value to `42`, this action mutates the array. Since `arr1` and `arr2` are sharing the same 
pointer and are pointing to the same array, both arrays will have the mutated array as a value. 

*/

