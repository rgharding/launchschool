function findFibonacciIndexByLength(numLength) {
  let fibb1 = 0n;
  let fibb2 = 1n;
  let currentFibb = 1n;
  let count = 2n;


  while (true) {
    console.log(currentFibb)
    count += 1n;
    fibb1 = fibb2;
    fibb2 = currentFibb;
    currentFibb = fibb1 + fibb2

    if (String(currentFibb).length >= numLength) {
        console.log(currentFibb)
        return count; 
    }
  }

 }



//console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
//console.log(findFibonacciIndexByLength(10n) === 45n);
//console.log(findFibonacciIndexByLength(16n) === 74n);
//findFibonacciIndexByLength(100n) === 476n;
//findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.