function sumSquareDifference(num) {
  let arr = []
  
  for (let i = 1; i <= num; i += 1) {
    arr.push(i);
  }

   return getSums(arr) - getSquares(arr);
}

function getSums(numArr) {
  return numArr.reduce((acc, cv) => {
    return acc += cv
  }, 0)** 2;

}


function getSquares(numArr) {
  return numArr.reduce((acc, cv) => {
    return acc += cv** 2
  }, 0)
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150//