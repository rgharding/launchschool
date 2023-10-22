// get average to 3 decimals


function multiplicativeAverage(arr) {
  let divisor = arr.length;

  let numerator = arr.reduce((acc, cv) => {
    return acc *= cv
  }, 1)

  return (numerator / divisor).toFixed(3);

}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"