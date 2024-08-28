/*
[P]roblem: given an array of numbers. return the avg of all the numbers rounded down. 

I/O: 
array
number

Rules: 
  - array will never be emtpy
  - Return the rounded avg


[E]xample and Test

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

I?O: Looks good;


[D]ata structure
Array: no
Object: no
HelpFunc: no



[A]lgorithm

- Define a function declaration 'average' that has 1 parameter 'arr'
  - Declare and initalize variable 'length' to the length of 'arr' parameter
  - get the avg of all the number is the array
    - decalre and initalize a variable count to 0;
    - loop thur each elemeneme of the 'arr' and add it to count'

  - Declare and inialize variable 'avg' to the result of didviing 'count' / 'length'
  - return the rounded valule of 'avg'

*/


function average(arr) {
  let length = arr.length
  
  return Math.floor(arr.reduce((acc, cv) => acc += cv) / length)
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40