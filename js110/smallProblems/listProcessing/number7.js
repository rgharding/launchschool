function sumOfSums(arr) {
  let total = 0;

  for (let i = arr.length; i > 0; i -= 1) {
    total += arr.slice(0, i).reduce((acc, cv) => {
      return acc + cv;
    }, 0)
  }

  console.log(total);
}

//sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
//sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
//sumOfSums([4]);              // 4
//sumOfSums([1, 2, 3, 4, 5]);  // 35



function sumOfSums2(arr) {
  let total = 0;

  for (let i = 1; i <= arr.length; i += 1) {
    total += arr.slice(0, i).reduce((acc, cv) => {
      return acc += cv;
    }, 0)
  }

  console.log(total);
}

//sumOfSums2([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
//sumOfSums2([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
//sumOfSums2([4]);              // 4
//sumOfSums2([1, 2, 3, 4, 5]);  // 35




function sumOfSums3(arr) {
  let x = arr.map((_, idx) => {
   return  arr.slice(0, idx + 1).reduce((acc, cv) => {
      return acc + cv
    }, 0)
  }).reduce((acc, cv) => acc += cv);
  console.log(x)
 
}

sumOfSums3([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
//sumOfSums3([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
//sumOfSums3([4]);              // 4
//sumOfSums3([1, 2, 3, 4, 5]);  // 35


