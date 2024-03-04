let sync = require('readline-sync');

let numArr = [];

while (numArr.length < 5) {
  let num = sync.question('Enter a number: ');
  numArr.push(num);

}

let num6 = sync.question('Enter a last number: ')

if (numArr.includes(num6)) {
  console.log(`${num6} is included in these numbers ${numArr}`)
} else {
  console.log(`${num6} is NOT included in these numbers ${numArr}`)
}