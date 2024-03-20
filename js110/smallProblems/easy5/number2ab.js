function union(...args) {
  let finalArr = [];
  
  args.forEach(elementArr => {
    noDuplicates(finalArr, elementArr);
  });

  console.log(finalArr)
}

function noDuplicates(finalArr, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!finalArr.includes(arr[i])) {
      finalArr.push(arr[i]);
    }
  }
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]