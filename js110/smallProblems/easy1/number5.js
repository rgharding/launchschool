// Create a simple tip calculator

let sync = require('readline-sync');

let totalAmount = parseFloat(sync.question('Enter total: '));
let tipPercent = parseFloat(sync.question('Enter tip as whole number percent: '));

let tipAmount = parseFloat((totalAmount * (tipPercent) / 100).toFixed(2));

let finalTotal = (totalAmount + tipAmount).toFixed(2);
console.log(`Amount: ${totalAmount}\nTip Percent: ${tipPercent}\nTip Amount ${tipAmount}\nFINAL AMOUNT: ${finalTotal}`);


