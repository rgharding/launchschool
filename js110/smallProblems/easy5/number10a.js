function average(numArr) {
  let length = numArr.length;
  
  let avg = Math.floor(numArr.reduce((acc, cv) => {
    return acc += cv
  }, 0) / length)

  console.log(avg);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40