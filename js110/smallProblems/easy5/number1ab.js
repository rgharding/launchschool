function dms(num) {
  let degString = String(num).split('.');
  const DEGREE = degString[0];
  
  let minsAndSecs = (num - DEGREE) * 60 
  let minsAndSecsArray = String(minsAndSecs).split('.');

  let MINS = minsAndSecsArray[0].padStart(2, '0');
  let SECS = Math.floor(((minsAndSecs - MINS) * 60)).toFixed(0).padStart(2, '0');
  
  
  console.log(`${DEGREE}\u00B0${MINS}'${SECS}"`)

  

}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"//