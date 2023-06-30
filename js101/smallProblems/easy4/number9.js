function stringToInteger(str) {
    const DIGITS = {
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

    let arrayOfDigits = str.split('');
    let numberArray = arrayOfDigits.map((number) => {
      return DIGITS[number];  
    });
    let value = 0;
    numberArray.forEach(digit => {
    return (value = (10 * value) + digit);
});
   console.log(value);
}


console.log(stringToInteger('4321') === 4321);
//console.log(stringToInteger('570') === 570);
//console.log(stringToInteger('23.1') === 21.1);