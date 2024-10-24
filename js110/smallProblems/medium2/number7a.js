function bubbleSort(arr) {
  
  while(true) {
    let hasBeenSwapped = false;

    for (let i = 0; i < arr.length; i += 1) {
      let leftItem = arr[i];
      let rightItem = arr[i + 1];

      if (leftItem <= rightItem) {
        continue;
      }

      if (leftItem > rightItem) {
        [arr[i], arr[i + 1]] = [arr[i+ 1], arr[i]];
        hasBeenSwapped = true; 
      }
    }
    
    if (!hasBeenSwapped) break;
  }
};


let array1 = [5, 3, 1];
bubbleSort(array1);
console.log(array1);    // [3, 5]

//let array2 = [6, 2, 7, 1, 4];
//bubbleSort(array2);
//console.log(array2);    // [1, 2, 4, 6, 7]
//
let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]