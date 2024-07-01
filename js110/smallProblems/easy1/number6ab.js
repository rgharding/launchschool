let sync = require('readline-sync');

let number = sync.question('Enter a number greater than 0: ');
let mathFunc = sync.question('Sum enter 1\nProduct enter 2\n:');
let numArr = [];
let returnNum;

for (let i = 1; i <= number; i += 1) {
  numArr.push(i);
}

if (mathFunc === '1') {
  returnNum = numArr.reduce((acc, cv) =>  {
    return acc += cv
  } ,0)
} else if(mathFunc === '2') {
  returnNum = numArr.reduce((acc, cv) => {
    return acc *= cv;
  }, 1)
}

console.log(returnNum)