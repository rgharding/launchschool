function sumSquareDifference(num) {
  let digitArr = getDigits(num);
  let sumSq = getSum(digitArr);
  let sumDigitSq = getDigitsSq(digitArr); 
  
  console.log(sumSq - sumDigitSq);
}

function getDigitsSq(numArr) {
  let squaredDigitsSum = numArr.map((digits) => {
    return digits ** 2;
  }).reduce((cv, acc) => {
    return acc += cv;
  }, 0);

  return squaredDigitsSum
}

function getSum(numArr) {
  let sumToSquare = numArr.reduce((cv, acc) => {
    return acc += cv;
  }, 0);

  return sumToSquare ** 2; 
}

function getDigits(inputNum) {
  let numArr = []

  for (let i = 1; i <= inputNum; i += 1) {
    numArr.push(i)
  }

  return numArr
} 

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150