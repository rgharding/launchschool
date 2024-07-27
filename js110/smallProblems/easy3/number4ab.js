function triangle(num) {
  
  for (let i = 1; i <= num; i += 1) {
    let paddedStars = '*'.repeat(i).padStart(num, ' ');
    console.log(paddedStars)
  }
}


triangle(5);

    
//triangle(9);

