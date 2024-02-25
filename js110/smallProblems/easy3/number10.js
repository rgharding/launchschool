function findFibonacciIndexByLength(num) {
  let fibb;
  let count = 2;
  let num1 = 1;
  let num2 = 1;
  
  do {

    let newNum = num1 + num2;
    fibb = newNum;
    num1 = num2;
    num2 = fibb;

    count += 1;

  } while (String(fibb).length < num);

  return count;
 
}


//console.log(findFibonacciIndexByLength(2) === 7);    // 1 1 2 3 5 8 13
//console.log(findFibonacciIndexByLength(3) === 12);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);
//console.log(findFibonacciIndexByLength(100) === 476);
//console.log(findFibonacciIndexByLength(1000) === 4782);
//console.log(findFibonacciIndexByLength(10000) === 47847)//;

//// The last example may take a minute or so to run.