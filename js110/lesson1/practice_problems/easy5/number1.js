/*
[P]roblem: Given an angle degree in numbers 0 - 360, integers or floating point, convert that number to degress, minutes, seconds. 

input: number
output: string

Rules:
  - input is a number
  - output is a string with symbols represnting each section of the string

Questions: 
  - How many digits are each section allowed to be?
  - How to get the symbol for the degree sign


[E]xampel and Test Cases

  input/output: look good


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

Questions
  - looks like 3 digits for degrees, 2 digits for minutes and seconds

[D]ata Structure

  Array: yes
  Object: no
  Function: yes


[A]lgorithm
    **Multi Function  ** 

  - Define a function declaration 'dms' that has 1 parameter 'inputNumber'
  - Declare and initalize variable 'result' to an empty string
  - Declare and initalize variable 'deg', 'min', 'sec' to empty strings.
  - Declare and initalize variable 'inputToString' to 'inputNumber' converted to string
  - Declare and initalize variable 'stringNumberArray' to value of 'inputString' split by '.'
  
  - Define an if statement
    - if the string does not conatain a '.' meaning it is not a floating point number
      -reassign 'deg' to the value of the string
      -reassign 'min', 'sec' to 00 with their respective symbols
      -reassign and return result to the described value with 'deg', 'min', 'sec'

    - if 'inputToString' contains a '.' it is a floating point number
        - reassign 'deg' to the value at index 0 of 'stringNumberArray'
        - declare and initalize 'degNumber' to index 0 converted to a number
        - declare and initalize 'floatRemainder' to   (inputNumber' - degree number) / 60
        - declare and initalize  'floatArray' to the value of float remainder converted to a     string, then to an array seperated by '.'
        
                      START BACK WITH THIS FUNCTION
        ** might want to write a seperate function that converts number to string and array and checks if it is a floating point number.  

        - Define a function 'breakdownNum' that has 1 parameter 'number'
        - Declare and ititalize varirable 'numberToString' to the value of 'number' converted to a string
        - Declare and initalize variabele 'stringArray' to the value of 'numberToString split into elements seperated by '.'
        - Declare and initalize 'resultArray' to an empty array
        - Declare and initalize 'tempNumber' to 0
        
        - Define an if statement, 
            if stringArray length === 1;
              resultArray at index 0 will equal stringArray index 0
              resultArray at index 1 will equal stringArray index '00'
              resultArray at index 2 will equal stringArray index '00'
            
            else  
              -
*/


function dms(number) {
  
  let stringArray ="";
   if (number < 0) { 
      number = number * -1
     stringArray = String(number).split('.');
   };
  
   console.log(stringArray);

  let deg;
  let min;
  let sec;
  let tempNumber = 0;
  let result = [];



  
    if (stringArray.length === 1) {
      deg = stringArray[0];
      min = '00';
      sec = '00'
      

    } else if (stringArray.length > 1) {
      deg = stringArray[0];
      
      tempNumber = ((number - stringArray[0]) ) * 60
      min = String(tempNumber).split('.')[0];
        if (min.length < 2) {
          min = '0' + min
        }
     
      tempNumber = (tempNumber - min) * 60;
      sec = String(tempNumber).split('.')[0];
        if (sec.length < 2) {
        sec = '0' + sec
      }
  }
   result.push(deg, min, sec);
    
   result =  `${result[0]}\u00B0${min}'${sec}'`
  return result
   }

  //  console.log(dms(30));           // 30°00'00"
  //  console.log(dms(76.73));        // 76°43'48"
  //  console.log(dms(254.6));        // 254°35'59"
  //  console.log(dms(93.034773));    // 93°02'05"
  //  console.log(dms(0));            // 0°00'00"
  //  console.log(dms(360));          // 360°00'00" or 0°00'00"


   console.log(dms(-30));           // 30°00'00"
   console.log(dms(-76.73));        // 76°43'48"
   console.log(dms(-254.6));        // 254°35'59"
   console.log(dms(-93.034773));    // 93°02'05"
   console.log(dms(-0));            // 0°00'00"
   console.log(dms(-360));          // 360°00'00" or 0°00'00"