/*
[P]roblem: Given a posiive integer, write a function that return an array of all of the indivusual numbers that make up that integer.

I/O
number
array of digits

-Rules
  - the return array's element must be digits

[E]xample 

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

I?O: Looks Good


[D]ata Structure:

Array: yes
Object: no
HelpFunc: maybe



[A]lgorithem

- Define a function declaration 'digitList' that has 1 parament 'num'

- Declare and inialize a variable 'returnArr' to an empty array

- Define a while loop
  - while (num > 0) {
    - let newNum = num % 10
    - add 'newNum' to return array from the front of the array
    - num = (num - newNum) / 10; 

  }

  return returnArr;
*/

// function digitList(num) {
//   let returnArr = []

//   while (num > 0) {
//     let currentDigit = num % 10;
//     returnArr.unshift(currentDigit);
//     num = (num - currentDigit) / 10
//   }

//   console.log(returnArr);
// }

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]



function digitList2(num) {
  let numArr = String(num).split('');
  let digitArr = [];


  numArr.forEach(element => digitArr.push(parseInt(element, 10)))

  console.log(digitArr);
}

digitList2(12345);       // [1, 2, 3, 4, 5]
digitList2(7);           // [7]
digitList2(375290);      // [3, 7, 5, 2, 9, 0]
digitList2(444);         // [4, 4, 4]