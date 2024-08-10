let numObj = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
}



function stringToSignedInteger(str) {
  let strArr = str.split('');
  let positiveOrNegative = ''

  if (strArr[0] === '+' || strArr[0] === '-') {
    positiveOrNegative = strArr.shift();
  }


  let number = stringToInteger(strArr);

  return positiveOrNegative === '-' ? number * -1 : number

}



function stringToInteger(arr) {

  let value = 0;
  
  arr.forEach(number => {
    value = (value * 10) + numObj[number];
 });

  return value;

} 

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true