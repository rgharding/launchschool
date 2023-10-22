function multiplyList(arr1, arr2) {
  let returnArr = []

  for (let i = 0; i < arr1.length; i += 1) {
    returnArr.push(arr1[i] * arr2[i])
  }

  return returnArr;
}



console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]