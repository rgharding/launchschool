function union(...args) {
  let unionArray = []
  args.forEach((arr) => noDups(arr, unionArray ));

  console.log(unionArray);
}

function noDups(arr, returnArr) {
  arr.forEach(element => {
    if (!returnArr.includes(element)) {
      returnArr.push(element)
    }
  })
  
}


union([1,2,3], [4, 5, 6]);