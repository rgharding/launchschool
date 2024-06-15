/*
[P]roblem   write a recursive merge sort algorithm.
  The alogorithm should take an array of items and keep breaking them down (spliting them into 2) until every element is in its own individual array.

input: array
output: new sorted array;


[E]xample
  ([9, 5, 7, 1]);               // [1, 5, 7, 9]

I/O: look good


[D]ata structure
  Array: yes
  Object: no
  HelperFunction: maybe


[A]lgorithm

  - Declare a function declaration 'mergeSort' that has 1 parameter 'inputArr'
    -Declare and initalize a vairable newArr to an empty arr
    -Define a while Loop (newArray's last element's length is greater than 1);
      - Define a for loop
          counter = 0, counter less that inputArr's length; counter increment by 1
  
*/


function merge(sub1, sub2) {
  return sub1.concat(sub2).sort((a, b) => a - b);
}


function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let subArr1 = arr.slice(0, arr.length / 2);
  let subArr2 = arr.slice(arr.length / 2);

  subArr1 = mergeSort(subArr1);
  subArr2 = mergeSort(subArr2)


  return merge(subArr1, subArr2);
  
}



console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1]))