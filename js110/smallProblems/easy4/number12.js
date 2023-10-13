let numStrArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function signedIntegerToString(num) {
  let strNum = '';

  if (num === 0) {
     return numStrArr[num]
  }

  if (num > 0) {
     strNum = '+' + numToString(num);
    return strNum;
  } else {
    strNum = '-' + numToString(-num);
    return strNum;
  }  

}

function negativeZero(number) {
  return `-${number}`
  
}


function numToString(num) {
  let newString = ''

  do {
    let currentNum = num % 10;
    newString = numStrArr[currentNum] + newString;
    num = (num - currentNum) / 10;

  } while (num > 0)
    
    return newString;
}



//console.log(signedIntegerToString(4321) === "+4321");
//console.log(signedIntegerToString(-123) === "-123");
//console.log(signedIntegerToString(0) === "0");



function signedIntegerToStringSwitch(num) {
    if (1 / num === -Infinity) {
      return negativeZero(num)
    }

  switch (Math.sign(num)) {
    case 1: 
      return `+${numToString(num)}`;
      break;
    case -1: 
      return `-${numToString(-num)}`
      break;
    case 0: 
      return `${numToString(num)}`
      break;
    case -0:
      return negativeZero(num);
      break;
  }

}

console.log(signedIntegerToStringSwitch(4321) === "+4321");
console.log(signedIntegerToStringSwitch(-123) === "-123");
console.log(signedIntegerToStringSwitch(0) === "0");
console.log(signedIntegerToStringSwitch(-0) === "-0");
