function negative(num) {
  if (num >= 0) {
    return Math.abs(num) * -1;
  } 
  return num
}


console.log(negative(5))
console.log(negative(-3))
console.log(negative(0))