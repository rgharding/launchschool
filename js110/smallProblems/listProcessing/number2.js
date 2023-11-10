let numberNameArray = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];


function alphabeticNumberSort(numArr) {
  let objNumberNames = {};

  for (let i = 0; i < numArr.length; i += 1) {
    objNumberNames[numberNameArray[i]] = [numArr[i]] 
  }
  
  let numNameArray = Object.keys(objNumberNames).sort()
  let sortedNums = numNameArray.map((element) => objNumberNames[element].shift());
  console.log(sortedNums);
 }




alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]




function sortArr(a, b) {
    if (numberNameArray[a] < numberNameArray[b]) {
      return -1
    } else if (numberNameArray[a] > numberNameArray[b]) {
      return 1
    } else {
      return 0
    }
} 

function alphabeticNumberSort2(arr) {
  let result = [...arr].sort(sortArr)
  console.log(result);
}

alphabeticNumberSort2(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]