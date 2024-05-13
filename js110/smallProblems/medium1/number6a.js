function findFibonacciIndexByLength(lengthToFind) {

  let currentFibb = 0;
  let indexCount = 1n;
  let fibb1 = 0n;
  let fibb2 = 1n;
 
  while (String(currentFibb).length < lengthToFind)  {

      currentFibb = fibb1 + fibb2;
      fibb1 = fibb2;
      fibb2 = currentFibb; 
      indexCount += 1n; 
   
   } 

  return indexCount;
}

 

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
//findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
//findFibonacciIndexByLength(10n) === 45n;
//findFibonacciIndexByLength(16n) === 74n;
//findFibonacciIndexByLength(100n) === 476n;
//findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.