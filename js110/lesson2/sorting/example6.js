/*
Sorting numbers
- Sort takes a call back funtion. It iterates thru the array comparing each parameter(array element) with another element. Based on if one element is greater than, less than or equal to the other value, determines what order it will be place.

- Below is an if esle statment that shows this.


[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ]


- This can be shortened to 
  [ 1, 2, 4, 9, 11, 21, 107 ].sort((a, b) => a - b);

  we switch the return value for descending order

*/


let x = [2, 11, 9, 4, 107, 21, 1];

let sortedNumbers = x.sort((a, b) => a - b);


console.log(sortedNumbers);