/*
[P]roblem:  given a number, return the next number that is multiple of seven and that no digits repeat in that number. 

Rules for Next Number: 
  - Must be a multiple of 7
  - No digits in the number can repeat


*/


function featured(num) {

  while(num < 9876543201) {
    num += 1;

    if (num % 7 === 0 && num % 2 !== 0 && noRepeats(num)) {
      return num;
    }

  }
    return "There is no possible number that fulfills those requirements."
}

function noRepeats(num) {
  
  let checkForRepeats = [];
  let numArr = String(num).split('');

  for (let i = 0; i < numArr.length; i += 1) {
    let currentNum = numArr[i]
    if (checkForRepeats.includes(currentNum)) {
      return false;
    } else {
      checkForRepeats.push(currentNum);
    }
  }
  
  return true
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."