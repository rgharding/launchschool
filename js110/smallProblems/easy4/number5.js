function runningTotal(inputArr) {
  let currentTotal = 0;
  let result = []

  for (let i = 0; i < inputArr.length; i += 1) {
    currentTotal += inputArr[i];
    result.push(currentTotal);
}

  console.log(result)
}





runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []