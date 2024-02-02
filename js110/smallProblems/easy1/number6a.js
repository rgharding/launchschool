let sync = require('readline-sync');

let number = Number.parseInt(sync.question('Enter an Integer: '));
let sumOrProduct = sync.question('Enter "a" for addition \OR\nEnter "m" for multiplication: ').toLowerCase();

let numArr = [];
for (let i = 1; i <= number; i += 1) {
  numArr.push(i);
}

function add(numArr) {
  return numArr.reduce((acc, cv) => {
    return acc += cv
  }, 0)
}

function multi(numArr) {
  return numArr.reduce((acc, cv) => {
    return acc *= cv
  } ,1);
}

if (sumOrProduct === 'a') {
  console.log(add(numArr))
} else {
  console.log(multi(numArr))
}