function triangle(...arr) {
  let [a, b, c] = arr.sort((a, b) => a - b);
  let total = arr.reduce((acc, cv) => {
    return acc += cv;
  }, 0)
  
  if ( arr.includes(0) || total !== 180) {
    return 'invalid'
  } else if (arr.includes(90)) {
    return 'right'
  } else if (a < 90 && b < 90 && c < 90) {
    return 'acute'
  } else if (a > 90 || b > 90 || c > 90) {
    return 'obtuse'
  }

}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"