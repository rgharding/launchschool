const NUMBERS = {
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
};


function stringToInteger(num) {
  let result = 0;

  let numArr = num.split('').map(digit => NUMBERS[digit]);

  numArr.forEach(number => {
    result = (result * 10) + number
  });

  return result;
  
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true