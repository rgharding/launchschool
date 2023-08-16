/* Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// let newArr = arr.map((innerArray) => {
//   if (typeof innerArray[0] === 'string') {
//     return innerArray.slice().sort();
//   } else {
//     return innerArray.slice().sort((a, b) => a - b)
//   }
// });

// console.log(newArr);


let testTheory = arr.slice().map(innerArr => {
  return innerArr.sort((a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1
    } else {
      return 0
    }
  })
});

console.log(testTheory);