/*
[P]roblem: given a time in 24 hour format, return the minutes before and after midnight. 

I/O:
string
number

Rules
  - range of numbers will be between 0-1439


[E]xamples

afterMidnight("00:00") === 0);
beforeMidnight("00:00") === 0);
afterMidnight("12:34") === 754);
beforeMidnight("12:34") === 686);
afterMidnight("24:00") === 0);
beforeMidnight("24:00") === 0);


[M]ental 
 get hours seperated from mins -> convert hours to mins -> add conveted hours to mins -> get reminder of total min from total mins in a day -> subtract 


[D]ata Structure

Array: no
Object: no
HelpFunc: yes

[A]lgorithm

- Declare and inintalze functon declaration 'beforMidmingt' that has 1 parameter time
  - Declare and initalize variable 'clockTime' to  60 * 24; 
  
  return clockTime - getMins(time) 


- Declare and inintalze functon declaration 'afterMidmingt' that has 1 parameter time
  - Declare and initalize variable 'clockTime' to 0; 
  
  return clockTime + getMins(time) 

***HElp FUntion
-Define a 1 function declaration 'getMins' that has 1 parameter 'timeStr'
  
  - declare and initalize variable MINS_PER_HOUR to 60
  - declare and initalize varibale MINS_PER_DAY to 60 * 24
  - declare and initalize variable 'timeArr' to the value of 'timeStr' split with ':'
  - declare and initalize variable 'hours' to 'timeArr' at index 0 * MINS_PER_HOUR
  - declare and initalize variable 'mins' to timeArr' at index 1
  - declare and initalize variable totalMins to 'hours' + 'mins'


  return totalMins;
*/



function afterMidnight(time) {
    let clockTime = 0

    return clockTime + getMins(time);
}


function beforeMidnight(time) {
  let clockTime = 60 * 24
  let mins = getMins(time);

  if (mins === 0) {
    return 0
  } else {
  return clockTime - getMins(time);
  }
}

function getMins(time) {
  let timeArr = time.split(':');
  let hours = parseInt(timeArr[0]);
  let mins = parseInt(timeArr[1]);

  let hourToMins = hours * 60;
  let dayHour = (hourToMins + mins) % (24 * 60);

  return dayHour;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);