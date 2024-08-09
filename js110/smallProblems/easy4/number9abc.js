/*
[A]lgorithm 
- get an array of digits
- declare and initalzie a vairbale 'value' to 0
- iterate thru array of digits
  - multiple current value * 10
  - add currendt digit to value;
  repeat the entirety of the array

/*


let numObj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
}




function stringToInteger(str) {
  let strArr = str.split('');
  let num = 0;
  let count = 0; 
 
  
}

*/

let numObj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,

}

function stringToInteger(str) {
  let strArr = str.split('');

  let numArr = strArr.map((numStr) => numObj[numStr]  )
 
  let value = 0

  numArr.forEach(number => {
    value = (value * 10) + number;
  });

  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
//console.log(stringToInteger("570") === 570); // logs true