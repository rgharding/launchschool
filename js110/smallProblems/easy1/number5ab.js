let sync = require('readline-sync');

let bill = parseFloat(sync.question('Enter bill amount: '));
let tipPercent = parseFloat(sync.question('Enter tip percent: '))
let tipAmount = parseFloat((bill * (tipPercent / 100)).toFixed(2));

let total = bill + tipAmount;
console.log(total);

console.log(`Bill: ${bill}`);
console.log(`Tip Percent: ${tipPercent}`);
console.log(`Tip Total: ${tipAmount}`);
console.log(`Total Bill: ${total}`);