/*
[P]roblem: Given a number, return the index of the fibbonacci number that has 'number' of digits;

I/O: 
number
number

Rules: 
- argument will always be a number greater or equal to 2

[E]xample and test cases
--> findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
--> findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144

I/O: look good


[M]ental Model
  set up a fibb -> -> setup a counter -> get current fibb number -> convert number to a string -> test whether current fibb length is equal to argument ->


[D]ata Structure
Array: no
Object: no
HelpFunc: maybe


[A]lgo
- define a function declaration 'findFibb' that has 1 parament 'num'
  - declare and initalize variable count to 1 or zero;
  - declare and initalize variable 'fibb1' to 0;
  - declare and initalize variable 'fibb2' to 1;
  
  -define a while loop
    - while true
      - define an if statement
        
        * Helper Func
        if testLength(inputNum, fibb1) {
          return count;  
        }*
      - cv = 0
      - fibb1 = fibb2;
      - fibb2 = cv + fibb2;
      - cv = fibb2;
      - count += 1;

** HelperFunc 
  - define a function declaration 'testLength' that has 2 parameter 'desiredLength', 'checkNum'
    - declare and initalize variable 'numLength' to the length of converted checkNum to a string
    - define an if statement
      - if  desiredLength equals numLength
        return true
      - else return false;   
      
      
///

fibb -->

fibb1 - 0
fibb2 - 1
cv = fibb1 + fibb2;
fibb1 = fibb2
fibb2 = cv 

*/

function findFibonacciIndexByLength(inputNum) {
  let count = 1n;
  let fibb1 = 0n;
  let fibb2 = 1n;
  
  let cv;

  while(true) {
    console.log(cv);
     if (testLength(inputNum, cv)) {
       return (count);
     }

    cv =  fibb1 + fibb2;
    fibb1 = fibb2;
    fibb2 = cv;
    count += 1n
   }
}


function testLength(lengthNeeded, numToTest) {
  let strLength = BigInt(String(numToTest).length);
  
  return strLength === lengthNeeded;
}



//console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
//console.log(findFibonacciIndexByLength(10n) === 45n);
//console.log(findFibonacciIndexByLength(16n) === 74n);
//console.log(findFibonacciIndexByLength(100n) === 476n);
//console.log(findFibonacciIndexByLength(1000n) === 4782n);
//console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.