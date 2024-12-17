/*
[P]roblem: given a array, write a bubble sort function

I/O:
array
array

Rules: 
  - the array should be sorted in place
  
Question: 
  - how should be sorted, greatest to least?


[E]xamples and test cases

I?O:  looks good

Question Aswers: sort least to greatest

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


[M]ental model
  get input array -> loop thur input array -> check curent pair for values -> swap current pairs is needed -> repeat process for entire array -> return sorted array when completed


[D]ata sturcture

Array: yes
Object: no
HelpFunc: no


[A]logrithm

-Define a function declaration 'bubbleSort' that has 1 parameter 'arr' 
  let needSwap = false

  - define a do while loop
      - define a for loop
        i = 0; condition i < 'arr'[length]; i += 1
          - define an if statement
            if arr[i] > arr[i + 1]
              swap arr[i] and arr[i + 1]
                needSwap = true;
             else - continue;

  -while needSwap = true
    
    return arr

*/


function bubbleSort(arr) {
  let neededSwap;

  while (true)  {
    let neededChange = false; 
    for (let i = 0; i < arr.length - 1; i += 1) { 
     if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      neededChange = true;
    } 
  } 

    if (neededChange === false) {
      return arr; 
    }
}  
  

}


//let array1 = [5, 3];
//bubbleSort(array1);
//console.log(array1);    // [3, 5];

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7];
//
//let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
//bubbleSort(array3);
//console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"];