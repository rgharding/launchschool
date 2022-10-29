/*
[P]roblem: write a function that when given an arr if returns an arr with every other element of the input arr.

input- arr;
output: new arr with every other value of the input arrray

Explicit: 
1. ever other element in added to new arr 

Question: 
1. what to do with 0 to 1 elements?


[E]xample & Test cases
[2, 3, 4, 5, 6] => [2, 4, 6]
[1, 2, 3, 4, 5, 6] => [1, 3, 5]
['abc', 'def'] => 'abc'
[123] => [123]
[] => [];

input/outputs look good

Answers
  1. 0 - 1 elements return an empty arr and that element respectively



[D]ata structure
  Array: yes
  Object: no
  Function: yes

[A]lgorithm
  1. Define a funciton declararion 'everyOther' that takes 1 parameter 'arr'
  2. Decalre and intalize 'everyOtherArray' to an empty arr
  3. define a for loop
    counter is 0, counter < inputArray's length, counter +2 on each iteration
  4. Add the element of 'arr' that corresponds to the current counter number
  5. Return everyotherarray
  
  
[C]ode with intent
*/

function everyOther(arr) {
  let newArr = []

  for(let count = 0; count < arr.length; count += 2) {
    newArr.push(arr[count]);
  }

  return newArr;
}




console.log(everyOther([2, 3, 4, 5, 6])); // => [2, 4, 6]
console.log(everyOther([1, 2, 3, 4, 5,6])); // => [1, 3, 5]
console.log(everyOther(['abc', 'def'])); // => ['abc'];;
console.log(everyOther([123])) // [123]
console.log(everyOther([])) // []
