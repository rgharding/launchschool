/*
[P]roblem - given an array of numbers, cycle thru the numbers swaping the digits so the lower digit comes before the higher digit. The final array should be sorted from least to greatest

- Input: array
- Output: array sorted from least to greatest;

  Questions: 
    - Will the arrays include only numbers?
    - Can I use built in sorting methods?
    - Do I return/sort a new array or original array?

-RULES:
  - return array should be sorted least to greatest or alphabetical 
  - Use Bubble Sort Method

[E]xample and test cases:

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


-ANSWERS: 
  - Yes both letters and numbers
  - Not sure, think they want bubble sorting
  - Return same array

  
[M]ental Model Intermission
  - get array -> cycle thur array -> check if current elem is more/less than next element -> if so, swap it, if not leave it alone. -> make notatation of all swaps per cycle -> keep repeating till there are no more swaps -> return swapped array


[A]lgorithm
  
  - Decalare a function declaration 'bubbleSort' that has 1 parameter 'inputArr'
  - define a for loop
      - i will be 0
      - length will be inputArr length
      - increment will be by 1 each loop 
    - Declare and initalize a variable 'count' to 0;
    - During loop check is 'inputArr i' is greater than 'inputArr i + 1
     - if yes
      - swap ''inputArr i'  with 'inputArr i + 1'
      - if yes add 1 to 'count'
     - if no do nothing;
    - If 'count' is greater than 0 repeat
    - If 'count' is zero return 'inputArr' 
  
  
  -HELPER SWAP function
  - declare a function declaration 'swap' that has 2 parameters 'arrToSwap', 'firstItemIndex'
    - decalare and initatlize variable 'firstSwap' to the value of 'arrToSwap' at 'firstItemIndex'
    - decalare and initatlize variable 'SecondSwap' to the value of 'arrToSwap' at 'firstItemIndex + 1'
    - declare and initalize 'nextIndex' to 'firstItemIndex' + 1
    - assign ''arrToSwap' at 'firstItemIndex' the variabl 'secondSwap' 
    - assign ''arrToSwap' at 'secondItemIndex' the variable 'firstSwap' 




*/
function swap(inputArr, firstItemIndex) {
  let secondeItemIndex = firstItemIndex + 1;
  let firstSwap = inputArr[firstItemIndex];
  let secondSwap = inputArr[secondeItemIndex];

  inputArr[firstItemIndex] = secondSwap;
  inputArr[secondeItemIndex] = firstSwap

}

function bubbleSort(arr) {
  let count = 0;
  
  do {
    count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let current = arr[i];
    let next = arr[i + 1]
    
    if (current > next) {
      swap(arr, i);
      count += 1
      } 
    }
  } while (count > 0);


}





//let array1 = [5, 3];
//bubbleSort(array1);
//console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]
//
//let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
//bubbleSort(array3);
//console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]