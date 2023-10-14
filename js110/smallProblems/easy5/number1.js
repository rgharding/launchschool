function dms(num) {
  let degree = Number.parseInt(num);
  let minutesAndSecs = (String(num).split('.')[1] / 100) * 60 
  


  let minutes = Number.parseInt(minutesAndSecs);
  let seconds = Math.round((minutesAndSecs - minutes) * 60) 

  if (Number.isNaN(minutesAndSecs)) {
    minutes = '00';
    seconds = '00';
  }
  
   return `${degree}\u00B0${minutes}'${seconds}"`;

}


//dms(30);           // 30°00'00"
//dms(76.73);        // 76°43'48"
//dms(254.6);        // 254°35'59"
//dms(93.034773);    // 93°02'05"
//dms(0);            // 0°00'00"
//dms(360);          // 360°00'00" or 0°00'00"


function dms2(num) {
  const DEGREE_SYMBOL = '\u00B0'
  const MIN_PER_DEGREE = 60;
  const SEC_PER_MINUTE = 60;
  const SEC_PER_DEGREE = MIN_PER_DEGREE * SEC_PER_MINUTE;

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


console.log(dms2(30));           // 30°00'00"
console.log(dms2(76.73));        // 76°43'48"
console.log(dms2(254.6));        // 254°35'59"
console.log(dms2(93.034773));    // 93°02'05"
console.log(dms2(0));            // 0°00'00"
console.log(dms2(360));          // 360°00'00" or 0°00'00"