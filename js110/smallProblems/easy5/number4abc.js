/*
[P]roblem: given an array of numbers with the knowledge the only 1 of the numbers appears twice, find that number, and return that number.

I/O
array
number

Rules: 
  - find the duplicate number from an array of numbers
  - Only 1 of the numbers will be a duplicate



[E]xample

I/O's Look Good!
[1, 5, 3, 1]                              // 1


[D]ata Structure
Array: yes
Object: no
HelpFunc: no


[A]lgorithm

- Defina a function declaratin 'findDup' that has 1 parameter 'arr'
 - Declare and inialize 'holdArr' to an empty arr

 - Define a for loop
  - counter at 0, conditional arr[length], increment by 1 on each iteration
  - define an if Statement
      - if holdArr includes arr[counter]
        return arr[counter]
      - else
        add arr[counter] to hold arr

  
*/


// function findDup(arr) {
//   let holdArr = []

//   for (let i = 0; i < arr.length; i += 1) {
//     if (holdArr.includes(arr[i])) {
//       return arr[i]
//     } else {
//       holdArr.push(arr[i]);
//     }
//   }
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73




// function findDupWithObject(arr) {
//   let seen = {}

//   for (let i = 0; i < arr.length; i += 1) {
//     if (seen[arr[i]]) {
//       return arr[i]
//     } else {
//       seen[arr[i]] = true;
//     }
//   }

//   return undefined;
// }

// console.log(findDupWithObject([1, 5, 3, 1]));                                // 1
// console.log(findDupWithObject([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73
        
// console.log(findDupWithObject([1, 5, 3])); 


function keepCount(arr, element) {
  let count = 0;
 
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === element) {
      count += 1
    }
  }

  return count
}


function findDupFind(arr) {
  let num = arr.find(element => keepCount(arr, element) === 2)
  return num;
}


console.log(findDupFind([1, 5, 3, 1]));                                // 1

/*
findDupFind([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
  */