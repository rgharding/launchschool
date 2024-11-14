/*
[P]roblem: given a number, return the next featured number

I/O:
number
number

Rules: 
  - a feature number is a multiple of 7 and in the digit none of the digits repeat. 
  - the largest feature number is 9876543201


[E]xamples:

I/O: Look Good

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

[M]ental model

get number -> get a count number to inputNum ->do a while loop number <= 9876543201 -> increment number by 1 -> check if number is divisible by 7 -> get helper funtion to see if numbers repeat -> if both of those are true return number


[D]ata structure

Array: yes
Object: no
HelpFunct: yes, check for repeats;


[A]lgorithm 

-Define a function declaration 'featured' that has 1 parameter 'inputNum'
  - declare and initalize variable 'MAX_NUM to 9876543201
  - declare and initalize variable 'currentNumber' to 'inputNum'

  define a while loop 'inputNum' <= 'MAX_NUM'
    - increment currentNumber by 1;
    
    - Define and if statement
        - if current number is divisible by 7 && checkForRepeats(currentNumber)
            return current number;
      --- end of while loop ---

    return 'no featured'
          

**Helper Func**
- Define a function declaration 'checkForRepeats' that has 1 parameter 'num'
  - Declare and initate variable 'numStrArr' to the value of num conveted to string and split into individual digits
  
  - declare and initalize variable 'holdDigitsArr' to an empty array

  - define a forEach loop to loop over 'numStrArr' 
    - declare an if statement
      -if current 'digit' is included in 'numStrArr' return false
      -else push current onto 'numStrArr' 

  - declare a return statement of true;


*/

function featured(num) {
  let currentNumber = num + 1; 

  while (currentNumber <= 9876543201) {
    if (currentNumber % 7 === 0  && currentNumber % 2 !== 0 && checkForRepeats(currentNumber)) {
      return currentNumber;
    }
      currentNumber += 1
    }

    return 'no such number';
}



function checkForRepeats(num) {
  let numStrArr = String(num).split('');
  let numHolder = [];
  let result = true;

  numStrArr.forEach(digit => {
    if (numHolder.includes(digit)) {
      result = false;
    } else {
      numHolder.push(digit);
    }
  });
  
  return result;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."