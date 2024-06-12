/*
[P]roblem: Given a nested array. Rotate the elements of the array 90 degress. 

I/O
  -nested array
  -new nested array

Rules: 
  - this input will be a nested array
  - the elements of each array will be rotated 90 degrees
  

[E]xample and test 
              [[1, 5, 8]        [[3, 4, 1]
               [4, 7, 2],        [9, 7, 5]
               [3, 9, 6],] -->   [6, 2, 8]]

              [[3, 7, 4, 2],    [[5, 3], 
               [5, 1, 0, 8]] ->  [1, 7], 
                                 [0, 4], 
                                 [8, 2]]
                
          
I/O: looks good


[M]ental model intermission
  create funtion -> set up new array with proper number of subArrays -> rotate thur original array and place each element 90 into new array -> return new array
  
[D]ata structure
  Array: yes
  Object: no
  Helper Function: no

[A]lgorithm

- Decalare a function declaration 'rotate90' that has 1 parameter 'arr'
  - Declare and initalize a variable 'returnArr' to an empty array
  - define a for loop as follows
    counter = 0; condition < arr[0] length; counter += 1

   - define a for loop
      :counter1 = 0, condition < arr.length; counter1 += 1 (This will loop thru the rows)
      - define a for loop
        :counter2 = 0, condition < arr[0]length; counter2 += 1 (This will loop thru rows elements)
        : newArr[counter2] unshift <-- arr[counter1][counter2] 

   - return newArr;     
*/ 


function rotate90(arr) {
  let newArr = [];
  for (let i = 0;i < arr[0].length; i += 1) {
    newArr.push([]);
  }

  for (let row = 0; row < arr.length; row += 1) {
    for (let rowIndx = 0; rowIndx < arr[0].length; rowIndx += 1) {
      newArr[rowIndx].unshift(arr[row][rowIndx]);
    }
  }

  return newArr
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]