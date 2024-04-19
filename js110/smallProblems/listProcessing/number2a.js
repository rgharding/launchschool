const numWords = ['zero', 'one', 'two', 'three', 'four', 'five']
let mappedObj = {

}

function alphabeticNumberSort(numArr) {
  let sortedNumbers = numArr.sort((a, b) => {
    if (numWords[a] < numWords[b]) {
      return 1;
    } else if(numWords[a] > numWords[b]) {
      return -1;
    } else {
      return 0;
    }
  });


  console.log(sortedNumbers);
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5]); // 





  // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]