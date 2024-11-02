function fibonacci(num) {
  let prevTwo = [1, 1];

  for (let i = 3; i <= num; i += 1) {
    prevTwo = [prevTwo[1], prevTwo[0] + prevTwo[1]];
  }
 
console.log(prevTwo[1]);
  
}


fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050