/*
[P]roblem: Convert a signed string to a number. Do not use Number or ParseInt methods.

input: string
output: number

Rules:
  - String with leadint signs must be the the value of that sign, +positive number - negeative number. 
  - Stiings with + signs do not need sign
  - Do not use Number or parseInt
  - Assume all numbers will be integers

[E]xample and test Cases

input/output: good

console.log(stringToSignedInteger("4321" === )) // true
console.log(stringToSignedInteger("-570" === )) // true
console.log(stringToSignedInteger("+100" === )) // true 

[D]ata structure

  Array: yes
  Object: no
  Function: Yes

[A]lgorithm

  ** 2 function Solution **

  * Function1: convert string to number

  - Definc a function declaration 'stringToInteget that takes 1 parameter 'string'
  - Declare and initalize 'strArray' to the value of each charater of string as its own element
  - Declare and initalize variable 'value' to 0
  - define a loop and loop thur 'strArray'
      for each element 
          value = (value * 10) + element
  - return value

  * Function2: converts a string with a sign to a number


  - Define a function declaration 'stringToSignedInteger' that takes 1 parameter numString
  - Define and if statement
      if numString[0] === '-'
        numString = numString with '-' removed
        return -  -'stringToInteger' with numString as argument
        
      else if numString[0] === '++
        numString = numString with '-' removed
        return -  -'stringToInteger' with numString as argument  
      
      else return 'stringToInteger' numString

*/

function stringToInteger(string) {
  let strArray = string.split('');
  
  const NUM_CONVERSION = {
    0: 0,
    1: 1, 
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6, 
    7: 7,
    8: 8, 
    9: 9
  }

  let numberArray = strArray.map((char) => {
    return NUM_CONVERSION[char];
  })


  let value = 0;

  numberArray.forEach((char) => {
    value = (value * 10) + char;
   });

   return value;
}




function stringToSignedInteger(numString) {
  if (numString[0] === '-') {
    return -(stringToInteger(numString.slice(1)));
  } else if (numString[0] === '+') {
    return (stringToInteger(numString.slice(1)))
  } else {
    return (stringToInteger(numString));
  }
}
  



console.log(stringToSignedInteger("4321") === 4321) // true
console.log(stringToSignedInteger("-570") === -570) // true
console.log(stringToSignedInteger("+100") === 100) // true 
