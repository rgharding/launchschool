function triangle(num) {
  let spaces = num - 1;
  let star = 1;

  while (num > 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(star)}`);
    num = num - 1;
    star = star + 1;
    spaces = spaces - 1;
  }
}


triangle(5)
//This was saved as wrong number