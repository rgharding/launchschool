function timeOfDay(mins) {

  if (mins === 0) {
    return '00:00';
  }

  let adjustedMins = getAdjustedMins(mins)
  let convertedAdjustedMins = getConvertedAdjusetedMins(adjustedMins);

  return convertedAdjustedMins
}



function getAdjustedMins(mins) {
  let adjustedMins = 0;
  
  if (mins > 1440) {
    do {
      mins -= 1440;
      adjustedMins = mins
    } while (mins > 1440);
  } else if (mins < 0) {
    do {
      mins += 1440
      adjustedMins = mins
    } while (mins < 0)
  } else {
    adjustedMins = mins
  }

  return adjustedMins;
}


function getConvertedAdjusetedMins(mins) {
  const MINS_PER_DAY = 1440;
  const HOURS_PER_DAY = 24
  const MINS_PER_HOUR = 60;

  let hours = Math.floor(mins / MINS_PER_HOUR);
  let remainderMins = mins % MINS_PER_HOUR;
  
  return  addZeros(hours, remainderMins);
  
}




function addZeros(hour, min) {
  
  let hours = String(hour)
  hours.length < 2 ? hours = '0' + hours : hours;
  
  let mins = String(min)
  mins.length < 2 ? mins = "0" + mins : mins;

  return `${hours}:${mins}`
}




console.log(timeOfDay(0) === "00:00");
console.log((timeOfDay(-3))  === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");