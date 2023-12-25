function transpose(matrix) {
  let newArr = [];

  for (let i = 0; i < matrix.length; i += 1) {
        newArr.push([]);
  }

  //  [[1, 2, 3, 4]]
  // newArr [ [] ]

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      newArr[row].push(matrix[row][col]) 
    }
  }

  console.log(newArr);
}

// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1]
// ];

//let newMatrix = transpose(matrix);

//console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
//console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]
//
//transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
//transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
//transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]