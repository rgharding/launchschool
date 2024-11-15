/*
[M]ental model 
  - get the number needed to do the processes on -> get an array empty -> get a for loop 
 start at one and push each ditig till the parameter digit on to the array -> get two vairable addFirst and squareFirst and redice them to theire respecive number
 - return addFurst - squareFirst


*/


function sumSquareDifference(num) {
  let numsToworkWith = []

  for (let i = 1; i <= num; i += 1) {
    numsToworkWith.push(i);
  }

  
  let addFirst = numsToworkWith.reduce((acc, cv) => {
    return acc += cv;  
  }, 0)** 2
  
  let squareFirst = numsToworkWith.reduce((acc, cv) => {
   return  acc += cv** 2;
  }, 0);

  console.log(addFirst - squareFirst);

}


sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150