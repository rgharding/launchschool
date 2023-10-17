function noDups(inputArr, newArr) {
  

  inputArr.forEach((letter) => {
    if (!newArr.includes(letter)) {
      newArr.push(letter)
    }
  })

  return newArr;
}

function union(...arr) {
  let newArr = []; 
 
  noDups(arr[0], newArr)
  noDups(arr[1], newArr)
  
  return newArr;
}





console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]