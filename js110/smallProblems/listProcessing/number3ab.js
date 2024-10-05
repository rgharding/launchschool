/*
[P]roblem: given 2 arrays of numbers, return the product of the first array of numbers (each individjual number) multiplied by each number in the second array. Return the final array in ascending order.

I/O
2 arrays
1 array

Rules: 
  - return array is single and element should be in ascending order


[E]xample 

I?O: Looks Good

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]


[D]ata structure

Array: yes
Object: no
HelpFunc: no


[A]lgorithm

- Define a function declaration 'multiplyAllPairs' that has 2 parameters 'arr1', 'arr2'
 
 - declare and inialize variable 'productsArr' to an empty array

 - define a for loop
  -count = 0; condition: count < arr1[length]; count += 1
    - define an inner for loop
      - count2 = 0; count2 < arr2[length]; count2 += 1
        push the result of arr1[count] * arr2[count1][count2]
    
  return sorted 'productsArr'  ** thsi could be a helper func
*/

function multiplyAllPairs(arr1, arr2) {
  let prodArr = [];

  for (let i = 0; i < arr1.length; i += 1){
    for (let j = 0; j < arr2.length; j += 1) {
      prodArr.push(arr1[i] * arr2[j]);
    }
  }

  return prodArr.sort((a, b) => a - b)
 }

//console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]



function multiplyAllPairs2(arr1, arr2) {
  let prodArr = []

  for (let num1 of arr1) {
    for (let num2 of arr2) {
      prodArr.push(num1 * num2);
    }
  }

  return prodArr.sort((a, b) => a - b);
}



//console.log(multiplyAllPairs2([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16];



function multiplyAllPairs3(arr1, arr2) {
  let prodArr = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
     prodArr.push(num1 * num2); 
    });
  });

  return prodArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs3([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]