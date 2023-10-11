
let numStrArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



function integerToString(num) {
  let newNum = []

    do {
      let currentDigit = num % 10
        newNum.unshift(numStrArr[currentDigit]);
        num -= currentDigit;
        num = num / 10;
   } while (num > 0); 

   console.log(newNum.join(''));
}



integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"