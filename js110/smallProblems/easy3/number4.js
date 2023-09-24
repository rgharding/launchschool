// make a right triangle that has a base totaling the input integer



function triangle(num) {
  for (let i = 1; i <= num; i += 1) {
    let line = '*'.repeat(i).padStart(num, ' ');
    console.log(line);
  }
}


triangle(5);
triangle(9);