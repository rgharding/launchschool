/*
[P]roblem-  given a number, positive or negaative integer that represents minutes, return a string that represents taht nunbers time in a 24hr time format of hour : minutes

I/O
number
string

Rules -
  - time must be in 24hr format
  - time must be a string with 4 ditigs, 2 for hours, 2 for mins


[E]xample

(0) === "00:00");
(-3) === "23:57");
(35) === "00:35");
(-1437) === "00:03");
(3000) === "02:00");
(800) === "13:20");
(-4231) === "01:29");


I/O:
look good


[D]ata Structure

Array: no
Object: no
HelpFunc: maybe,,, getting times to have right amount of digits


[A]lgorith

- Define a function declartaion 'timeOfday' that has 1 parameter 'timeMins'
  - declare and initalize variable HOURS_PER_DAY to 24
  - declare and initalize variable MINS_PER_HOUR to 60
  - declare and initalize variable MINS_PER_DAY to HOURS_PER_DAY * MINS_PER_HOUR

  - declare and initalize variabe 'howMuchArournd' to the value of timeMins % MINS_PER_DAY- 
  - declare and initalize timeInMins;

  - define and if statement
    if howMuchAround < 0
      - timInMins = MINS_PER_DAY - howMuchAround
    else timeInMins = howMuchAround

  - declare and initalize variable 'hours' to the value of timeInMins / MINS_PER_HOUR parse the interger
  - declare and initalize variable 'mins' to the value of (timeInMins / MINS_PER_HOUR) - hours, parse the integer


 hours = needTwoDigits(hour);
 mins = needTwoDigits(mins);

 return  hour + ':' + mins




** HelperFunc  needTwoDigits
-declare a function declaration 'needTwoDigits' the has 1 parameter 'numStr'
  - define an if statement
    if 'numStr' length === 1
      return '0' + numStr
    else 
      return numStr
*/


function timeOfDay(timeInMins) {
  const HOURS_PER_DAY = 24;
  const MINS_PER_HOUR = 60;
  const MINS_PER_DAY = HOURS_PER_DAY * MINS_PER_HOUR

  let timesAround = timeInMins % MINS_PER_DAY;
 
  if (timeInMins < 0) {
    timesAround = MINS_PER_DAY + timesAround
  }

  let hours = parseInt(timesAround / MINS_PER_HOUR);
  let mins = parseInt(Math.round((timesAround % MINS_PER_HOUR)));
  
  return (`${needTwoDigits(String(hours))}:${needTwoDigits(String(mins))}`)
}

function needTwoDigits(numStr) {
  return numStr.length === 1 ? '0' + numStr : numStr 
  
}




console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");