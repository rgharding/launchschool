/*
[P]roblem - given two arrays, return a single array with the elements from the 2 arrays interleaved.

- input- 2 arrays
- output - 1 array with the elements of the 2 arrays

Rules - 
  - assusme arrays have the same amount of elements
  - elements are added to the new array interleaved


[E]xamples and Test Cases

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
- I/O Looks Good;
*/


function interleave(arr1, arr2) {
  let newArr = [];
  
  for (let i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i], arr2[i]);
  }
  console.log(newArr);
}


interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]