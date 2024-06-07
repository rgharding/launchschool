/*
[P]roblem - given a nested array where all nested array have a length of 3. Rotate that arrays so all of the index from each nested array are in the same subArr, and in order of appearance. 

Rule: 
  - we will assusme all of the subArrays have a length of 3
  - we will assume that there are 3 subarrays in the outer array
  - do not mutate the original array

input - nested array
output - new nested array,

[E]xample and test cases

I/O: Look good
  I: [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
  O: [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


[M]ental Model Intermission
  input arr -> outPut arr -> loop thur input arr and rotate inner loop elements -> add rotated elements to a new nested arr -> return nested arr.

[D]ata Structure
  Array: yes
  Object: no
  HelperFunction: no


[A]lgorithm
  - define a function declaration 'transpose' that takes 1 parameter 'arr'
    - define a variable 'rotatedArr' to an empty array;
    - define a for loop with the following conditions
        -'columm' 0: the length of the arr: increment rowIndx by 1 on each loop
    - define a for loop second loop
        -'subArr' 0: the lengrh of arr: increment subArr by 1 on each loop
     - on each interation push the value of arr[colum][subArr] to 'rotatedArr'

     return rotatedArr;

*/


function transpose(arr) {
  let rotatedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    rotatedArr.push([]);
  }

  for (let rowIndx = 0; rowIndx < arr.length; rowIndx += 1) {
    for (let row = 0; row < arr.length; row += 1) {
      rotatedArr[rowIndx].push(arr[row][rowIndx]);
    }
  }  
  
  return rotatedArr
}

const matrix = [
  [1, 5, 8], 
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]