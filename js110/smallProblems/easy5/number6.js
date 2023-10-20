function count(array, element) {
  let count = 0;
  
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup(array) {
  return array.find(element => count(array, element) === 2);
  // 1
};

console.log(findDup([1, 5, 3, 1]));