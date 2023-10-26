function average(numArr) {
  let numerator = numArr.reduce((acc, cv) => {
    return acc += cv
  }, 0);

  let denomonator = numArr.length;

  console.log(Math.floor(numerator / denomonator));
}



average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40