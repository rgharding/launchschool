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


function stringToSignedInteger(strNum) {
  let result = 0;
  let firstChar = strNum[0];

   if (strNum[0] === '-' || strNum[0] === '+') {
    strNum = strNum.slice(1);
  }

  let numArr = strNum.split('').map(element =>  NUMBERS[element]);
  numArr.forEach(number => {
    result = (result * 10) + number;
  });
  
  return firstChar[0] === '-' ? result * -1 : result;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true