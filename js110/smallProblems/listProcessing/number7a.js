function sumOfSums(arr) {
  
  let subStringsArray = getSubStrings(arr);  
  let convertedArray = convertToNums(subStringsArray);

  let totals = 0;

  convertedArray.forEach(subArr => {
    totals += subArr.reduce((acc, cv) => {
      return acc += cv;
    } ,0);
  })

  console.log(totals)
}


function convertToNums(arr) {
  let makeNums = arr.map(subArr => {
    return subArr.map(element => {
      return Number.parseInt(element)
    })
  });

  return makeNums;

}

function getSubStrings(arrayOfStrings) {
  let subsArray = []
  
  for (let i = 1; i <= arrayOfStrings.length; i += 1) {
    let current = arrayOfStrings.slice(0, i);
    subsArray.push(current);
  }

    return subsArray;
}


//sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
//sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
//sumOfSums([4]);              // 4
//sumOfSums([1, 2, 3, 4, 5]);  // 35



function sumOfSums2(arr) {
  let total = 0;

  for (let i = 1; i <= arr.length; i += 1) {
    let subArrTotal = arr.slice(0, i).reduce((acc, cv) => acc += cv);
    total += subArrTotal
  }

  console.log(total);
}

sumOfSums2([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums2([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums2([4]);              // 4
sumOfSums2([1, 2, 3, 4, 5]);  // 35