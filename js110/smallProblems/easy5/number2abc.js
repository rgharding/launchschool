/**
[P]roblem: given 2 array, write a functiion that combines the two arrays with no repeats

I/O

2 arrays of numbers
1 array of numbers: no repeats

Rules:
- Combine two arrays into one array with no repeats

- Question:
  will Arrays be same length?



[E]xamples

1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
I/O's Look Good

QuestAnswer: 
- Looks like arrays will be same length

[D]ata Structure:
Array: yes
Obj: no
HelpFunc: no


[A]lgo

Declare a function declaration 'union' that has 2 parameters 'arr1', 'arr2'
  - Declare and initalize a variable 'joinedArray' to an emptyArr
  
  - Define a for loop 
    counter 0, condition length of either array, increment by 1 on each iteration

    Define an if Statement 
    if (joinedArr incluedes the value of arr1[counter]) 
      - continues
    else
      push the value of 'arr1'[counter] onto 'joinedArr'

     Define an if Statement 
    if (joinedArr incluedes the value of arr2[counter]) 
      - continue
    else
      push the value of 'arr2'[counter] onto 'joinedArr'
    -- end of loop    
    
  return joinedArr


*/


// function union(arr1, arr2) {
//   let joinedArr = [];

//   for (let i = 0; i < arr1.length; i += 1) {
//     if (!joinedArr.includes(arr1[i])) {
//        joinedArr.push(arr1[i]);
//     }

//     if (!joinedArr.includes(arr2[i])) {
//        joinedArr.push(arr2[i]);
//     }
//   }


//   console.log(joinedArr);
// }

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]




function union2(...args) {
  let joinedArr = [];

  args.forEach( arr => {
    copyNoDupes(arr, joinedArr);
  })
  
  console.log(joinedArr)
}

function copyNoDupes(arr, joinedArr) {
  arr.forEach(element => {
    if (!joinedArr.includes(element)) {
      joinedArr.push(element);
    }
  })
}

union2([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]