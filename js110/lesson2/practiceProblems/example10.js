// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order


let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']]

sortedArr = arr.map(innerArr => {
    return innerArr.slice().sort((a ,b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      if (a === b) return 0;
    })
});

console.log(sortedArr)
