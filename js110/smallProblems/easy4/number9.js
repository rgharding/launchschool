function stringToInteger(numStr) {
  let conversionObj = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
  }

  let numArr = numStr.split('').map(digit => {
    return conversionObj[digit];
  });
  
  let value = 0;  // 4 // 40 + 3 // 430 + 2 // 4320 + 1 --> 4321


  numArr.forEach(digit => {
    return value = (value * 10) + digit
  });
  
  return value;
}


//console.log(stringToInteger("4321")) // logs true
//console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("7") === 7); // logs true