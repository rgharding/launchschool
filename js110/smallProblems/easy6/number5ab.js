/*
[P]roblme: given a positive interger, log all the numbers from 1 to the integer in an arrya

I/O: 
number
array of numbers

Rules: 
  - input number will be positive
  - return values will be an array beginig with 1 and increments up till the input number buy 1


[E]xamples

I?O: Looks good

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]


[D]ata Structure

Array: yes
Object: no
HelpFunc: no


[A]lgorithm:

- Define a function declaration 'sequence' that has 1 paramenter 'maxNum'
  - declard and initalize a variable 'numArr' to an empyt array
  - define a for loop
    - count = 1; condition 'count' <= 'maxNum'; count += 1
    - push 'count' onto 'numArr'

  - return 'numArr'
  
  */


function sequence(maxNum) {
  let numArr = [];
  
  for (let i = 1; i <= maxNum; i += 1) {
    numArr.push(i);
  }

    console.log(numArr);
}


sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]