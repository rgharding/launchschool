/*
[P]roblem: given an array of integers, return the average to three deciamal points, og the product of all the numbers.


I/O
array of nums
string limited to 3 decimal places

-Rules
  - return value is a string limited to 3 digits past decimal point
  - the avg will be the total value of all the numbers times each other NOT sum


[E]xample and test cases

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

I?O: Look good


[D]ata Structure:

Array: no
Object: no
HelpFunc: yes
 - get total product of numbers


[A]lgorithm

-Declare/Define a function declaration 'multAvg' that has 1 parament 'arr'
  - Declare and initalize a variable 'totalProd' to the return value of **getTotal(arr)**
  - delcare and initalize 'totalAvg' to the value of 'totalProd' / arr's length

  - convert totalAvg to string, rounding to 3 places after deciaml

  return totalAvg
  



HelpFunc  **getTotal** 

- declare/define a function declaration 'getTotal' that has 1 paramenter 'arr'
---Pourpose--- return the total of all of the numbers in arr multiplies by each other
  
  - Declare and initalize variable 'count' to the value of 1
  - Define a for loop
    -counter = 0; conditional: counter < arr length; increment by 1 on each iteration
      -  count =  arr[counter] * count

  return count;
*/


function multAvg(arr) {
  return (getTotal(arr) / arr.length).toFixed(3) 
}


function getTotal(arr) {
  return  arr.reduce((acc, cv) => {
    return acc *= cv;
  } ,1);
  
}

console.log(multAvg([3, 5]));                   // "7.500"
console.log(multAvg([2, 5, 7, 11, 13, 17]));    // "28361.667"
