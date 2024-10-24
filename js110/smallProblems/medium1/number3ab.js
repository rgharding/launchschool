/*
[P]roblem: given a digit, return a digit with maximum rotaions, move the current index to the rear, then move the next cronological index number to the end. So the current 0 index should be remain the same and it should have been the original 1 index. Keep moving on like this till maximum rotation has taken place

I/0: 
number
number rotated

Rules: 
  - numbers need to be rotated not all the way
  - when a number is rotated from an index, the next number takes that spot and remains


[E]xample and test Cases




[D]ata structure
Array: no
Object:no
HelpFunc: yes rotateArray (take front and move to back)


[A]logrithm

-Define a function declaration 'maxRotation' that has 1 paramenter 'num'
  - declare and iniatlize variable 'numStr' to the value of num coerced into string
  
  - define for loop:
      count = 0; conditional < 'numStr[length / 2]; increment by 1 each iteration 
        
      let firstPart = numStr.slice(count, count + 1)
      let secondPart = numStr.slice(count + 1)
      numStr = firstPart + secondPart

    
  return numStr


*/

function maxRotation(num) {
  let numStr = String(num);
   
  
  for (let i = numStr.length; i > 1; i -= 1) {
      numStr = moveRightMost(numStr, i);
      console.log(numStr)
  }


}


function moveRightMost(str, digit) {
  let stringArr = str.split('');
  let length = stringArr.length;
  
  let charToMove = stringArr.splice(length - digit, 1);
  
  return (stringArr.concat(charToMove).join(''));
}



maxRotation(735291);          // 321579
//maxRotation(3);               // 3
//maxRotation(35);              // 53
//maxRotation(105);             // 15 -- the leading zero gets dropped
//maxRotation(8703529146);      // 7321609845