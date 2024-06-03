let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];
let count = 0; 

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    continue;
  }

  console.log(numbers[i]** 2);
}

