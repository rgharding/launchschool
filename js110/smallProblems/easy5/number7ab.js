/*
[P]roblem: given 2 arrays of numbers, return an array with the products of each number from both arrays that share the same index. 

I/O
2 arrays
1 array

Rules- 
  - Assume both arays are the same length
  - Return a new array
  - The numbers used to multiple for product must share the same idex value


[E]xample and test

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

I?O: Look Good


[D]ata Structure

Array: yes
Obj: no
HelpFunc: no


[A]lgo

- Define a function declararation that has 2 params   'arr1' 'arr2'
   - Declare and iniatilz variable 'productArr' to an empty array
   - Define a for loop
    - counter = 0; conditional: counter < arr1; increment by 1 on each loop
      push value of  multipling arr1 counter by arr2 counter to 'productArr'

  
   Return 'productArr'

*/


function multiplyList(arr1, arr2) {
  let productArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    productArr.push(arr1[i] * arr2[i]);
  }

  return productArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]