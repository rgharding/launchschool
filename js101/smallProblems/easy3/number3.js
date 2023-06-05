function stringy(num) {
  let result = ""
  
  for (let i = 1; i <= num; i += 1) {
    if (i % 2 !== 0) {
      result = result + '1';
    } else {
      result = result + '0';
    }
  }
  return result;
}

// console.log(stringy(6));
// console.log(stringy(9));
// console.log(stringy(4));
// console.log(stringy(7));
// console.log(stringy(1));



  function stringy2(num) {
  let result = '';
  for (let index = 0; index < num; index += 1) {
    let ternaryResult = index % 2 === 0 ? 1 : 0;
    result = result + ternaryResult;
  }
  return result;
}

console.log(stringy2(6));
console.log(stringy2(9));
console.log(stringy2(4));
console.log(stringy2(7));
console.log(stringy2(1));