// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let sortedArr = arr.sort((a, b) => {
  let sumA = a.reduce((acc, cv) => {
    if (cv % 2 === 1) {
      acc += cv
    }
    return acc;
  }, 0);

  let sumB = b.reduce((acc, cv) => {
    if (cv % 2 === 1) {
      acc += cv;
    }
    return acc;
  }, 0)

  return sumA - sumB;
});

console.log(sortedArr);