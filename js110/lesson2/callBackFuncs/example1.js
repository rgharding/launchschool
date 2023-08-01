/*
Transformation with loop and transformation with map


*/

let numbers = [1, 2, 3, 4, 5];
let loopResult = [];

for (let i = 0; i < numbers.length; i+= 1) {
  let currentNum = numbers[i];
  loopResult.push(currentNum * currentNum);
}

console.log(loopResult);


let mapResult = numbers.map( (number) => number * number );
console.log(mapResult);



/*
Higher order functions are functions that take other functions as arguments or return other functions. 

Functions that are passed as arguments to higher order functions are called callback functions...
*/

let arr = [[1, 2], [3, 4]];
arr.forEach((arr => console.log(arr[0])));
// 1
// 3


/*
forEach is a higher order function
the callback function on the above code is the arr => console.log
*/
