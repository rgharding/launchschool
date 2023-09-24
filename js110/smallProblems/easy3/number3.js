// Given a positive interger, return a string of altenating 1's and 0's the length of that integer. Always start with 1

function stringy(num) {
  let even = '1';
  let odd = '0';
  let result = ''

  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      result += even;
    } else {
      result += odd;
    }
  }

  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));