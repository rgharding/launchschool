function sequence(num) {
  let numArr = []

  for (let i = 1; i <= num; i += 1) {
    numArr.push(i);
  }

  console.log(numArr);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]