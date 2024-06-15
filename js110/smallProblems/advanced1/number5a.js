/*
[P]roblem: given 2 arrays of numbers, combine the two array into one array (retaining original arrays). The arrays should be in order from least to greatest and do not sort the final array.

I/O
  -2 arrays
  -singe new array with all the elements from both arrays

Rules: 
  - do not mutate original arrays
  - do not use a sorting method on built array
  - built array should be built in order
  
[E]xample and test cases

I/O's look good

[1, 5, 9], [2, 6, 8]    // [1, 2, 5, 6, 8, 9]
[1, 1, 3], [2, 2]       // [1, 1, 2, 2, 3]
[], [1, 4, 5]           // [1, 4, 5]
[1, 4, 5], []           // [1, 4, 5]


[D]ata structure
  Array: yes
  Object: no
  HelperFunction: no


  [1, 5, 9], [2, 6, 8]    // [1, 2, 5, 6, 8, 9]
[A]lgorithm
  - Defince a function declaration that has 2 paramenters (arr1) (arr2);
    - Declare and initalize a variable 'finalArr' to an empty arr
    - Delcare and initalize 'copy1' and 'copy2' to the copied value of arr1/arr2

    - define a while loop
      -condition while copy1 and copy2 lengths are greater than 0
        if copy1[0] length is greater than copy2[0] length  push copy 2 length onto final array or push copy1 length on final array

    - outside of the loop
        if copy1.length > copy2.length concat copy1 onto finalArr
          or concat copy2 onto finalArr 



*/


function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let resultArr = [];

  while (copy1.length > 0 && copy2.length > 0) {
    resultArr.push(copy1[0] > copy2[0] ? copy2.shift() : copy1.shift())
  }

   return resultArr.concat( copy1.length === 0 ? copy2 : copy1 )
  
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]