/*
[P]roblem: given an array of elements, and reverse the elementins in place. The new array should be the same as the original array

I/O
Array
Same Array

Rules: 
  - revese the elements of an array
  - The reversed element array should be the same as the original array
  - Do not use reverse method;

  
[E]xamples 

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true



[D]ata Structure

Array: yes
Object: no
HelpFunc: no



[A]lgorithm

-Define a function declaration 'reverse' that has 1 parameter 'arr'
  - declare and initalize 'leftIndex' to the value of 0;
  - declare and initalize 'rightIndex' to the value of 'arr[length] -1' 
  
   - define a for loop
    - count  = 0; count < arr[length] / 2; count += 1
      - deconsturct arr array
      - [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]
      - increment 'leftIndex' by 1
      - decrement 'rightIndex' by 1
      

  return newArr;
*/

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true



let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true



function reverse(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  for (let i = 0; i < arr.length / 2; i += 1) {
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    leftIndex += 1
    rightIndex -= 1;
  }

  return arr;
}


