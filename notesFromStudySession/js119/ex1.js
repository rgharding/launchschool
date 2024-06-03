// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.


function maxSequence(arr) {
  if (arr.length === 0) {
    return 0;
  };

  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 1; j < arr.length; j += 1) {
      if ()
    }
  }
}
// Test Cases
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/*
Problem 
  Input: array of numbers
  Output: num (maximum sum of contiguous subsequence)
  Assumptions:
    Contiguous subsequence -> left tom right, no skipping numbers
    handle empty arrays
    assume array contains numbers if not empty
    dont return negative -> return 0 instead

Data structure
  Array

Algorithm
  Return 0 if array length is 0 (empty array)
  Keep track of largest sum in a variable = 0
  Create subsequences of numbers starting with first number
    Use two loops -> first loops over each number in the array
        -> second loops from given number to second number
        If the sum from first number to the second number > largest sum
          Set largest sum to current sum