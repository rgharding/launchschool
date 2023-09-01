// log all even numbers inclusive from 1 to 99 each on seperate line


function even(min, max) {
  for (let i = min; i < max; i += 1) {
    if (i % 2 === 1) {
      continue;
    }
    console.log(i);
  }
}

even(1, 100);