let STRING_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function signedIntegerToString(num) {
  let strNum = ''
  let sign = ''


  if (num === 0) {
    return STRING_NUMBERS[num]
  }

  if (num < 0) {
    sign = '-'
    num = num * -1;
  }

    while (num > 0) {
      let digit = num % 10;
      strNum =  STRING_NUMBERS[digit] + strNum;
      
      num = num - digit;
      num = num / 10;
      
    }

    return sign === '-' ?  `-${strNum}` : `+${strNum}`
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

