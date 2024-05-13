function fibonacci(number) {
  let currentFibb = 0;
  
  let fibb1 = 0;
  let fibb2 = 1;
  let count = 1; 

  while (count < number) {
    currentFibb = fibb1 + fibb2;
    fibb1 = fibb2;
    fibb2 = currentFibb;
    count += 1;
  }

  console.log(currentFibb);
}

//fibonacci(20);       // 6765
//fibonacci(50);       // 12586269025
//fibonacci(75);       // 2111485077978050




function fibonacci2(nth) {
  let fibbs = [0, 1];
  
  for (let i = 1; i < nth; i += 1) {
    fibbs = [fibbs[1], fibbs[0] + fibbs[1] ]
  }

  return fibbs
}


console.log(fibonacci2(20));       // 6765
fibonacci2(50);       // 12586269025
fibonacci2(75);       // 2111485077978050