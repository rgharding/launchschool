function multiplyAllPairs(arr1, arr2) {
  let multiplesArr = []

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      multiplesArr.push(arr1[i] * arr2[j])
    }
  }
  return multiplesArr.sort((a, b) => a - b);
 }


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]