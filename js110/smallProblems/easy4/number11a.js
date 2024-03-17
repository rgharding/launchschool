const STRING_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

function integerToString(number) {
  let strArr = [];

  if (number <= 0) {
    return STRING_NUMBERS[number];
  }

  while (number > 0) {
    let digit = number % 10;
    strArr.unshift(STRING_NUMBERS[digit]);
     
    number = number - digit;
    number = number / 10;
  }
  
  return strArr.join('');
}


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "123456789