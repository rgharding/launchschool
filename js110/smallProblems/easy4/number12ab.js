
function signedIntegerToString(num) {
  
  let numStrArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let strNum = ''
  let numCopy = num;

  if (numCopy < 0) {
    numCopy = numCopy * -1;
  }

  do {
    
    let currentNum = numCopy % 10;
    strNum = numStrArr[currentNum] + strNum;
    numCopy = (numCopy - currentNum) / 10;
  
  } while (numCopy > 0)

  
  return addSign(num, strNum);

}


function addSign(num, str) {

  if (num > 0) {
    return  '+' + str;
  } else if (num < 0) {
    return '-' + str;
  } else {
    return str;
  } 
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");