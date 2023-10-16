function dms2(num) {
  const DEGREE_SYMBOL = '\u00B0'
  const MIN_PER_DEGREE = 60;
  const SEC_PER_MINUTE = 60;
  const SEC_PER_DEGREE = MIN_PER_DEGREE * SEC_PER_MINUTE;

  if (num < 0 || num > 360) {
   num = greaterOrLess(num)
  }

  let degree = Math.floor(num) 
  let min = Math.floor((num - degree) * MIN_PER_DEGREE);
  let sec = Math.floor(((((num - degree) * MIN_PER_DEGREE)) - min) * 60)

  return `${degree}${DEGREE_SYMBOL}${padzeros(min)}'${padzeros(sec)}"`;
}

function padzeros(num) {

  let numToString = String(num);

  if (numToString.length === 2) {
    return numToString;
  } else if (numToString.length === 1) {
    return `0${numToString}`
  } else {
    return '00'
  }
}


function greaterOrLess(inputNum) {
  
  if (inputNum < 0) {
   while (inputNum <= 360) {
    inputNum += 360;
    if (inputNum <= 360 && inputNum > 0) {
      return inputNum
    }
   }
  }

  if (inputNum > 360) {
    while (inputNum >= 0) {
      inputNum -= 360;

      if (inputNum < 360) {
        return inputNum;
      }
    }
  }
  
}



console.log(dms2(-1));   // 359°00'00"
console.log(dms2(400));  // 40°00'00"
console.log(dms2(-40));  // 320°00'00"
console.log(dms2(-420)); // 300°00'00"

//console.log(dms2(30));           // 30°00'00"
//console.log(dms2(76.73));        // 76°43'48"
//console.log(dms2(254.6));        // 254°35'59"
//console.log(dms2(93.034773));    // 93°02'05"
//console.log(dms2(0));            // 0°00'00"
//console.log(dms2(360));          // 360°00'00" or 0°00'00"