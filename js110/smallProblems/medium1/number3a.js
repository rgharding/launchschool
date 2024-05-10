function firstToLast(numArr) {
  let first = numArr.shift();
  numArr.push(first);
  
  return numArr;
}


function rotateRightMost(num, digitsToRotate) {
    
  let numArr = String(num).split('')
    let leftPart = numArr.slice(0, numArr.length - digitsToRotate);
    let rightPart = firstToLast(numArr.slice(numArr.length - digitsToRotate));
    
    
    return leftPart.concat(rightPart).join();
}


function maxRotation(number) {
  let numberOfDigits = String(number).length;
  
  for (let i = numberOfDigits; i > 2; i -= 1) {
    number = rotateRightMost(number, numberOfDigits);
  } 
  console.log(number)
 
};

maxRotation(735291);          // 321579
       //   357291 
       //   357219          
       //   357129   
       //   
       //   

//maxRotation(3);               // 3
//maxRotation(35);              // 53
//maxRotation(105);             // 15 -- the leading zero gets dropped
//maxRotation(8703529146);      // 7321609845