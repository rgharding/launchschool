function transpose(nestedArray) {
  let transposed = [];


  for (let rowIndex = 0; rowIndex < nestedArray.length; rowIndex += 1) {
    transposed.push([]);  
  }

  for (let rowInd = 0; rowInd < nestedArray.length; rowInd += 1) {
    for (let colInd = 0; colInd < nestedArray[rowInd].length; colInd += 1) {
        transposed[rowInd].push(nestedArray[colInd][rowInd]);
    }
  }
  

  return transposed;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]