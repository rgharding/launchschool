function featured(num) {
  num += 1  

  if (num >= 9876543201) {
    return 'There is no possible number to fill that requirment'
  }


  do {

  if (divisible(num) && !doesRepeat(num)) {
      return num;
    } else {
      num += 1;
    }
  } while (num <= 9876543201)

    
}




function doesRepeat(num) {
  let numStr = String(num);

  for (digit of numStr) {
    let regex = new RegExp(digit, 'g')
    let numArr = numStr.match(regex)
    
    if (numArr.length > 1) {
      return true;
    } 
  } 
}

function divisible(num) {
  if (num % 2 === 1 && num % 7 === 0) {
    return true;
  }
}

//console.log(featured(12));           // 21
//console.log(featured(20));           // 21
//console.log(featured(21));           // 35
//console.log(featured(997));          // 1029
//console.log(featured(1029));         // 1043
//console.log(featured(999999));       // 1023547
//console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
//console.log(featured(9876543200));   // 9876543201
//console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."