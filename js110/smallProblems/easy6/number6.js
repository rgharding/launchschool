function sequence(count, multiples) {
  let multiplesArr = []

  if (count === 0) {
    return multiplesArr;
  }

  for (let i = 1; multiplesArr.length < count; i += 1) {
    
    if (multiples === 0) {
      multiplesArr.push(i * multiples);
    }
    
    if ((i * multiples) % multiples === 0) {
      multiplesArr.push(i * multiples);
    }
  }
  
  return multiplesArr;
}


// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));          // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []




function sequence2(count, multiple) {
  let multiplesArr = []

  for (let i = 1; i <= count; i += 1) {
    multiplesArr.push(i * multiple)
  }

  return multiplesArr;
}


console.log(sequence2(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7));          // [-7, -14, -21, -28]
console.log(sequence2(3, 0));          // [0, 0, 0]
console.log(sequence2(0, 1000000));    // []









