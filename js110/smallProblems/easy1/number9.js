// Write a function that computes to sum of all number between 1 and some number inclusive, that are multiples of 3 and 5;

function isMultiple(number, divisor) {
  return number % divisor === 0;
}


function multiSum(maxNum) {
  let count = 0;
  for (let i = 1; i <= maxNum; i += 1) {
    if (isMultiple(i, 3) || (isMultiple(i, 5))) {
      count += i
    }
  }
  return count;
}

console.log(multiSum(3)) // 3
console.log(multiSum(5)) // 8
console.log(multiSum(10)) // 33
console.log(multiSum(1000)); // 234168



