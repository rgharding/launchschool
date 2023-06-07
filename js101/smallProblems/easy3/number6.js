function triangle(num) {
  let space = num - 1;
  let star = 1;
  let count = num;

    while (count) {
      console.log(`${' '.repeat(space)}${'*'.repeat(star)}`)
      space = space - 1;
      star = star + 1;
      count = count - 1
    }
    
}

console.log(triangle(5));

