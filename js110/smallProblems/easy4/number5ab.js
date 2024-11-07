/*
[P]roblem: given an array of numbers, return an array of the same length with a running total of the sums of the input array. 

Rules:
- The return array must be the same length as the original array
- The numbers in the return array must be a running total of the original array

I/O
Array
Another array

Rules:
- both arrays should be same length
- running totals should start with first amoutnnin array



[E]xample & test cases

I/O: Look Good

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []



[D]ata sturcture:

Array: yes
Object: no
HF: no


[A]lgorithm:

- define a functio declaration 'runnitngTotal' that hae 1 parameter 'arr'
  - declare and initalize a variable to runTotals to an empty arr;
  - declare and initailize a variable total to 0;

  define a for loop
    - counter = 0, condidtional is counter < arr length; increment by 1
    - total += arr[counter]
    - push current total to runtotals array

  - return total  


[C]ode with intent 
*/



function runningTotal(arr) {
  let total = 0;
  let totalArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
    totalArr.push(total);
  }

  console.log(totalArr);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []