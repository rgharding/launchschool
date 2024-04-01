
const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = HOURS_PER_DAY * MINS_PER_HOUR;

function timeOfDay(inputMins) {

  
  if (inputMins < 0) {
    inputMins = (inputMins % MINS_PER_DAY) + MINS_PER_DAY;
  } else {
    inputMins = inputMins % MINS_PER_DAY;
  }
  
  let hours = Math.floor(inputMins / MINS_PER_HOUR) 
  let mins = inputMins % MINS_PER_HOUR;
  
  
  console.log(hours, mins)
  


}


timeOfDay(-4231)

//console.log(timeOfDay(0) === "00:00");
//console.log(timeOfDay(-3) === "23:57");
//console.log(timeOfDay(35) === "00:35");
//console.log(timeOfDay(-1437) === "00:03");
//console.log(timeOfDay(3000) === "02:00");
//console.log(timeOfDay(800) === "13:20");
//console.log(timeOfDay(-4231) === "01:29");