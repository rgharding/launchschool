function oddities(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}


let array1 = [];
console.log(oddities(array1));