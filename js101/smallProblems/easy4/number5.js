function runningTotal(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      newArr.push(arr[i]);
    } else {
      newArr.push(newArr[i - 1]+ arr[i]);
    }
  }
  return newArr
}



console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


function runningTotal2(arr) {
  let sum = 0;
  let result = arr.map((element) => {
    return sum += element;
  });
  return result;
}

console.log(runningTotal2([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal2([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal2([3]));                    // [3]
console.log(runningTotal2([]));                     // []