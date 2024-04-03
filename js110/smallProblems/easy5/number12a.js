function afterMidnight(strTime) {

  let timeArr = strTime.split(':');
  let hours = parseInt(timeArr[0]) * 60;
  let mins = parseInt(timeArr[1])
  
  let totalMins = hours + mins

  if ( (timeArr[0] === '24' || timeArr[0] === '00') && timeArr[1] === '00') {
    return 0;
  }


  return totalMins
}


function beforeMidnight(strTime) {

  let timeArr = strTime.split(':');
  let hours = parseInt(timeArr[0]) * 60;
  let mins = parseInt(timeArr[1])
  
  let totalMins = hours + mins

  if ( (timeArr[0] === '24' || timeArr[0] === '00') && timeArr[1] === '00') {
    return 0;
  }


  return 1440 - totalMins
}




//console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
//console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
//console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);