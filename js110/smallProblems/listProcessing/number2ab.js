/*
[P]roblem: given an array of numbers from 0 to 19, return the numbers sorted by the alphabetical spelling of that number;

I/O: 
Array
Array

Rules:
- Return sorted array based on alphabetical spelling of number

Question: 
- should it be soredted a-z or z-a


[E]xamples and test cases:

   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] =>

 [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


[D]ata Structure:
Array: yes
Object: no
HelpFunc: no


[A]lgoritm
- Define a function declaration 'alphaNumSort' that has 1 parameter 'numArr'
  
  - declare an inialize variable 'numToName' to an array,
    This array will have the alpha spelling of the index  
      ex ['zero', 'one'];

  - declare and initalize a vairbale 'sortedArr' to the value of the 'numArr' passed to the sort method.
    - in the sort method, return the sorted values of 'numToName[a]' and 'numToName[b];
    
    return 'sortedArr'
*/  

let numToWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(arr) {

  let sortedArr = [...arr].sort((a, b) => {
    if (numToWord[a] < numToWord[b]) {
      return -1
    } else if (numToWord[a] > numToWord[b]) {
      return 1
    } else {
      return 0;
    }
  });


  console.log(sortedArr);
  console.log(arr)
} 


alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]