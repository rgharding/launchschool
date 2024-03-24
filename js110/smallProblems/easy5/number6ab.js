function multiplicativeAverage(arr) {
  let numOfGrades = arr.length;
  let total = arr.reduce((acc, cv) => {
    return acc *= cv;
  }, 1);

  let avg = (total / numOfGrades).toFixed(3);

  return avg;
}


console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"