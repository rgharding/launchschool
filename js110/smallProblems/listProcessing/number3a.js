function multiplyAllPairs(arr1, arr2) {
  let multiplesArr   = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      multiplesArr.push(num1 * num2);
    })
  });

  let sortedArr = multiplesArr.sort((a, b) => a - b);

  console.log(sortedArr)
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]