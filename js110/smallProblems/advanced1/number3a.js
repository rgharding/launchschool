/*
[P]roblem: given a nested array, rotate the elements in the nested arrays, so that each seperate rows indexs are all on the same row. Do not mutate the original array.

I/O
  -nestedArray
  -new nestedArr

Rules:
  - elements of different sub arrays that share the same index must be rotated to the same sub array
  

  Not Stated: 
    row elemets index will be the new row that it gets rotated to. 
    ex: all row element with idex 0 will end up on row 0;
    - subArrays must be the same length; it needs to be balanced like a square or rectangle grid of rows and columns


[E]xample and test cases:
  [[1, 2, 3, 4]];            // [[1], [2], [3], [4]]
  [[1], [2], [3], [4]];      // [[1, 2, 3, 4]]
  [[1]]; //  [[1]]        
  [[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]] // [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

I/O look good


[M]ental Model Intermission
  --> create function with param -> create return variable, figure out how many subArrays will be needed for it --> loop thru input arr and assign/put elements in proper place of return variable -> return the return variable
  
  
[D]ata structure:
  Array: yes
  Object: no
  Function: no
  

[A]lgorithm:
- Define a function declaration 'transpose' that has 1 parament 'arr'
  - declare and initalize 'returnArr' to an empty arr
  
  - define a for loop with the following
    - counter = 0, loop length will be less than the length of the first subArr; count +=  1 
    - push an empty [] to 'returnArr' on each iteration
  
  //  [[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]

  - define a for loop  
      - counter1 = 0; length < arr.length; counter1 += 1
    - define a for loop
      - counter2 = 0; length arr[0].length; counter2 += 1
        - returnArr[counter2] push <-- arr[counter1][counter2]


    return 'returnArr'
*/


function transpose(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr[0].length; i += 1) {
    newArr.push([]);
  }


  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[0].length; j += 1) {
      newArr[j].push(arr[i][j]);
    }
  }


  return newArr;
}



const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

//let newMatrix = transpose(matrix);

//console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
//console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]