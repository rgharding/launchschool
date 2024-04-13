function sequence(count, multiple) {
  let resultArr = [];
  let mutiplyBy = 1

  if (count === 0) {
    return resultArr;
  }

    if (multiple === 0) {
      return multipleZero(resultArr, count);
    } 

    do {
    let currentNumber = multiple * mutiplyBy

    if (currentNumber % multiple === 0) {
      resultArr.push(currentNumber)
    } 
      mutiplyBy += 1
    } while (resultArr.length < count)

    
  

  return resultArr;
}


function multipleZero(resultArr, count) {
  for (let i = 0; i < count; i += 1) {
    resultArr.push(0)
  }
  
  return resultArr; 
}

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []



function sequence2(count, numberToMultiply) {
  let returnArr = [];

  for (let i = 1; i <= count; i += 1) {
    returnArr.push(i * numberToMultiply);
  }

  return returnArr;
}


console.log(sequence2(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7));         // [-7, -14, -21, -28]
console.log(sequence2(3, 0));          // [0, 0, 0]
console.log(sequence2(0, 1000000));    // []