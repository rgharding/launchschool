function sequence(num) {
  let resultArr = [];
  
  for (let i = 1; i <= num; i += 1) {
    resultArr.push(i)
  }
  console.log(resultArr)
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]