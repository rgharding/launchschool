function centerOf(str) {
  let result;
  if (str.length % 2 !== 0) {
    result = str.slice(str.length / 2, (str.length / 2) + 1);
  } else if (str.length % 2 ===0) {
    result = str.slice( (str.length / 2) - 1, (str.length / 2) + 1);
  }
  return result;
}


console.log(centerOf('I Love Javascript'));// 'a'
console.log(centerOf('Launch School'));// ' '
console.log(centerOf('Launch'));// 'un'
console.log(centerOf('LaunchSchool'));// 'hs'
console.log(centerOf('x'));// 'x'
