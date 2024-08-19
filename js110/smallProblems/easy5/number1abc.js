/*
[P]roblme: given a floating point number, return the number in degress mins and seconds

I/O
number
String

Rules:
  - output must be a string with degree symbol for degrees, ' for mins, " for secs
  - There is 60 mins in a degree
  - There is 60 sec in a min
  - For mins and secs there must always be 2 digits, even if it is 00
  - For degress, 360 can either be 0 or 360

[E]xamples 

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


[M]ental model intermission

- get number and parse it out => get the formula set up for degs, mins, secs, => figure out degs, mins, sec => convert those numbers to strings => add any needed 0's => combine and return str


[D]ata Structure
- Array: no
-Object: no
HelpFunc: Yes => getting right amount of 0's



[A]lgorithm

- Define a function declaration 'dms' that has 1 paramenter 'fullDegree' 
  - Declare and initalize a variable 'degreeSymbol to the value of \u00B0
  - Declare and inialize variable Mins_Per_Degree to the value of 60;
  - Declare and inialize variable Secs_Per_Min to the value of 60;

  
  - Declare and initaluze variable 'justgDegree' to the value of 'fullDegree' rounded;
  
  - Declare and inialize variable 'mins' to the value of 'fullDegree' minus 'justDegree', that decimal value times Mins_Per_Degree.  That whole value rounded
  
  - Declare and initalize variable 'sec' to the value of:
((('fullDegree' - 'justDegree') * Mins_Per_Degree)) - mins) * Secs_Per_Min. That whole value rounded  


  return a template literal with degree followed by the symbol for degree, followed by the return valur of 'addZeros with 'mins' passed as argument surrounded in '', same thing with "secs" surrounded with double quotes 

** Helper Function

-Define a function declaration 'addZeros' that has 1 parameter (numStr) 
  
  -Define an if statement
    - if numStr's length === 2
      return numStr
      - else
         return '0' + numStr

*/


function dms(fullDegree) {
  let degreeSymbol = '\u00B0'
  let Mins_Per_Hour = 60;
  let Secs_Per_Min = 60;


  let justDegree = Math.floor(fullDegree);
  
  let mins = Math.floor((fullDegree - justDegree) * Mins_Per_Hour);

  let secs = Math.floor((((fullDegree - justDegree) * Mins_Per_Hour) - mins) * Secs_Per_Min);
  
  

  console.log(`${justDegree}${degreeSymbol}${addZero(mins)}'${addZero(secs)}"`);

}


function addZero(numStr) {
  numStr = String(numStr);
  return numStr.length < 2 ? '0' + numStr : numStr
}
 


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"