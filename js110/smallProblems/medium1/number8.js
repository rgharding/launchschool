function fibonacci(num) {
  let count1 = 0; 
  let count2 = 1;
  let fib;


  for (let i = 1; i < num; i += 1) {
    fib = count1 + count2;
    count1 = count2;
    count2 = fib;
  }
 console.log(fib);
}

// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050



function fibonacciArr(num) {
  let fibbArr = [1, 1];
  
  for (let i = 3; i <= num; i += 1) {
    fibbArr = [fibbArr[1], fibbArr[0] + fibbArr[1]]; 
  }

  console.log(fibbArr[1]);
}

fibonacciArr(20);       // 6765
fibonacciArr(50);       // 12586269025
fibonacciArr(75);       // 2111485077978050