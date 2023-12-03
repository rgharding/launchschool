function maxRotation(num) {
  let strNum = String(num);
  let count = 0; 


  do {

    let start = count;
    let end = count + 1;
    let letterToRotate = strNum.slice(start, end);
    
    let newLineStart = strNum.slice(0, count);
    let newLineEnd = strNum.slice(end);

    strNum = newLineStart + newLineEnd + letterToRotate;
    count += 1;
  } while (count <= strNum.length - 2) 

  return  trimStart(strNum) 
}


function trimStart(str) {
  return Number.parseInt(str);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845