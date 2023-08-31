// Log all odd numbers from 1 to 99 inclusive; each num on seperate line


function logOdd() {
  let count = 1; 

  while (count < 100) {
      if (count % 2 === 1) {
        console.log(count);
      }
      count += 1
  }
}


logOdd();