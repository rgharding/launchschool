function triangle(num) {
  for (let i = 1; i <= num; i += 1) {
    let str = '*'.repeat(i).padStart(num, ' ');
    console.log(str)
  }
}


//triangle(5);
triangle(9);