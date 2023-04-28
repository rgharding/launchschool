/*
[P]roblem - take an array of number. Create a new array with the same amount of numbers and have each number be a running total of each number from the original array.

I/O -
-array
-array

[E]xamples and test Cases

[2, 5, 13] => [2, 7, 20]
[14, 11, 7, 15, 20] => [14, 25, 32, 47, 67]
[3] => [3]
[] => []

i/o: looks good;

[M]ental Model Intermission

-array => add current number in array to previous number => put that number in new array;

[D]ata structue;
Do we need an object? Yes. We will need an array;

[A]lgorithm:

- get original array;
- create an empty array;
- loop thur original array
- put the first number of original array in the empty array
- add value of current index to value of previous index.
- place result in empty array
*/




function runningTotal(array) {
	let newArray = [];
  let currentNumber = array[0];
 
 for (let i = 1; i <= array.length; i += 1) {
  		newArray.push(currentNumber);
      currentNumber += array[i];
  }
  	console.log(newArray);
  
}

/*   OR

function runningTotal(array) {
	let sum = 0;
  let newArray = array.map (number =>  {
  		return sum += number;
  }); 
  console.log(newArray);
}

OR

fucntion runningTotal(array) {
  let newArray = [];
  let currentValue = array[0];

  for (let i = 1, i <= array.length; i += 1) {
      newArray.push(currentValue);
      currentValue += array[i];
  }
  return newArray;
}

*/



runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // [] */