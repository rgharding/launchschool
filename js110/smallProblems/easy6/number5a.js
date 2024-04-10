function swapName(str) {
  let nameArr = str.split(' ');
  let first = nameArr[0];
  let last = nameArr[1];

  return `${last}, ${first}`
}

//console.log(swapName('Joe Roberts'));    // "Roberts, Joe"



function swapName2(str) {
  return str.split(' ').reverse().join(', ')
}
console.log(swapName2('Joe Roberts'));    // "Roberts, Joe"



