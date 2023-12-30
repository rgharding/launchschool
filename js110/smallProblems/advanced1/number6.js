function merge(arr1, arr2) {
  
  let copy1 = arr1.slice()//.sort();  //  [9, 5];
  let copy2 = arr2.slice()//.sort();  //  [7, 1];
  let result = []


  while (copy1.length > 0 && copy2.length > 0) {
  result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
 }
  
  return result.concat( copy1.length === 0 ? copy2 : copy1 );
}


function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2);
  
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  
  return (merge(arr1, arr2));

}

console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
//mergeSort([5, 3]);                     // [3, 5]
//mergeSort([6, 2, 7, 1, 4]);            // [1, 2, 4, 6, 7]
//mergeSort([9, 2, 7, 6, 8, 5, 0, 1]); // [0, 1, 2, 5, 6, 7, 8, 9])
//
//mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
//// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
//
//mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]