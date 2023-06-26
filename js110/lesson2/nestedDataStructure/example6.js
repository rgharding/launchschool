/*
Variable Reference for nested Collections

Using variable to add arrays to an array, the varible add a pointer to the referenced array and adds that to the array being added to.

In the following example arr adds a pointer to the variables a and b. So if a or b variables are modified, arr will also be modified because it is pointing to the same array's that are represnted by variable a and b.]]

*/


let a = [1, 3];
let b = [2];

let arr = [a, b] 
console.log(arr); // [[1, 3], [2]]

b[1] = 99
console.log(b)
console.log(arr) // [[1, 3], [2, 99]];


/*
This works the same way if we modify the first element of the arr variable array
*/

arr[0][2] = "This changes a from the array, not the a variable";
console.log(a); // [1, 3, 'This changes...'];