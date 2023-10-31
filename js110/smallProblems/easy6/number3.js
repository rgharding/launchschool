function reverseNumber(num) {
  let strNumArray =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let numberStr = ''
  let value = 0;

  while(num > 0) {
    let number = num % 10;
    num = (num - number) / 10
    
    numberStr = strNumArray[number] + numberStr 
  }

  let revNumberArray = numberStr.split('').reverse();
  let noLeadingZeros = removeLeadingZeros(revNumberArray);

  console.log(noLeadingZeros);
}



function removeLeadingZeros(numberArray) {
  
   while (numberArray[0] === '0') {
    numberArray.shift();
   }
  
  return Number(numberArray.join(''));
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1