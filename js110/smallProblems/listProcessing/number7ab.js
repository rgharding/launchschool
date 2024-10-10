/*
[P]roblem: given an array of numbers, return the sum of all of the numbers of each leading subsequence.

I/O
array
number

Rules: 
  - return value should be the sum of all subSequences of leading number
  - First subSequence should be first number only


[E]xample and test cases

I?O: looks good

--> [3, 5, 2];        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
--> [1, 5, 7, 3];     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
--> [4];              // 4
--> [1, 2, 3, 4, 5];  // 35


[D]ata Stucture
Array: yes
Object: no
HelpFunc: yes


[A]lgorithm

**HelpFunc  **getSubSequence**

-Define a function declaration 'getSubSequence' that has 1 paramenter 'arr'
  -declare and initalize variable 'seqSubsArr' to an empty array [];
  - define a for loop
    count = 1; count < arr[length]; count += 1
    join the value of arr sliced 0, count to seqSubsArr

  - return 'seqSubsArr'


*** MainFunc  ***sumOfSums***

-Define a function declaraion 'sumOfSums' that has 1 paramenter 'arr'
  - declare and inialize variable 'numbersToSumArr' to the return value of 'getSubSequence' with 'arr' passed as argument.

  - return the reduced by sum array of 'numbersToSumARr'

*/

function getSubSequence(arr) {
  let subSequence = [];

  for (let i = 1; i <= arr.length; i += 1) {
    subSequence = subSequence.concat(arr.slice(0, i));
  }

  return subSequence;
}


function sumOfSums(arr) {
  let numbersToSum = getSubSequence(arr);

  let sum = numbersToSum.reduce((acc, cv) => {
    return acc += cv;
  }, 0);

  console.log(sum);
};

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35