// function runningTotal(arr) {
//   let newArr = []
//   let runningTot = 0
  
//   for (let i = 0; i < arr.length; i += 1) {
//     runningTot += arr[i];
//     newArr.push(runningTot);
//   }

//   return newArr;
// }


// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []





function runningTotal2(arr) {
  let sum = 0;

  let retunArr = arr.map( element => {
    sum += element;
    return sum;
  });

  console.log(retunArr)
}

runningTotal2([2, 5, 13]);             // [2, 7, 20]
runningTotal2([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal2([3]);                    // [3]
runningTotal2([]);                     // []