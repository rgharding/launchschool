let fibObj = {};

function fibonacci(nth) {
  if (nth <= 2) {
    return 1
  } else if (fibObj[nth]) {
    return fibObj[nth];
  } else {
    fibObj[nth] = fibonacci(nth - 1) + fibonacci(nth - 2)
    return fibObj[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765