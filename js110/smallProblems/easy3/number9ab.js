/*
[P]roblem: write a function that takes a year and returns a string of the century with the appropitate grammer, st, nd, rd, th 

I/O:
number
string

Rules:
  - new centuries begins in years that end with 01
  
Questions:
  - will we be dealing with single digit years? 
  - how far out do we go?


[E]xample and test cases

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


I/O: look good

question: 
- yes to 1st century
- any positive year it should return a century


[M]ental model Intermission

 get year => seperate last 2 digits => detrmine if last 2 digits past 00 => get the proper centyr => find the correct suffix => return current century plus suffix


[D]ata Structures and Algo
Array: no
Obj: no
HF: YES




[A]lgorithm

- Define a function declaration that has 1 parameter 'year'
  - Declare and initalize variable 'yearStr' to the value of year conveted to a string
  
  - Define an if statement
    if yearStr length < 3
      return  lastDigit( lastDigit of yearStr)

  - Declare and initalize variable 'century' to the value of 'yearStr' without last 2 digits
  - Declare and initalize variable 'lastDigit' to the value of 'yearStr' last digit 'yearStr length - 1

  - Define an if statement
    if last digit > 0 => century += 1
    
  - return ***getSuffix*** with century passed as argument

  ----------------------------------------------------------------

- Define a function definition 'getSuffix' that has 1 parameter 'centuryStr'
  - Declare and initalize variable 'lastDigit' to the value of last digit of 'centuryStr'
  
  - Declare and initalize variable 'lastTwo' to the value of last 2 digits of centuryStr'
  
  - Define an if statement
    - if 'lastTwo' equal 11, 12, 13
      return 'centuryStr' + 'th' 
    
    else return 'lastDigitFunc' (centrytStr, lastDigit)


-----------------------------------------------------------------------------

-Define a function declaration 'lastDigitFunc' has 2 parameters 'year', 'lastDigit'

    - define a switch statement with 'lastDigit' passed 
        case 1 => 'st'
        case 2 => 'nd'
        case 3 => 'rd'
        default => 'th'

    return centuryYear + suffix
*/

function century(year) {
  let yearStr = String(year);

  if (yearStr.length < 3) {
    return '1st'
  }

  let century = yearStr.slice(0, yearStr.length - 2);
  let lastTwo = yearStr.slice(yearStr.length - 2);
  
  if (lastTwo !== '00') {
    century = Number(century) + 1;
    century = String(century);
  }

  return getSuffix(century)
}


function getSuffix(cent) {
   let lastTwo = cent.slice(cent.length - 2);
  
   if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
     return cent + 'th'
   }


   let last = cent.slice(cent.length - 1);

   switch(last) {
    case '1':
      return cent + 'st';
      break;
    case '2':
      return cent + 'nd';
      break;
    case '3':
      return cent + 'rd';
      break;
    default:
      return cent + 'th'
   }
}



console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th")