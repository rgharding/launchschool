function triangle(a, b, c) {
  let arr = [a, b, c].sort((a, b) => a - b);

    a = arr[0];
    b = arr[1];
    c = arr[2]

  if (a === b && b === c && a === c) {
    return 'equlateral'
  } else if (a === 0 || b === 0 || c === 0) {
    return 'invalid';
  }  else if (a + b < c) {
    return 'invalid';
  } else if (a === b || a === c || b === c) {
    return 'isosceles'
  } else {
    return 'scalene'
  }
  
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"