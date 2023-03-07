/*
What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.
*/

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

let x =trees[trees.length - 1];  //palm tree
let y = trees.pop(); // palm tree 
let z = trees[trees.length - 1]; // sequoia
console.log(x, y, z)
