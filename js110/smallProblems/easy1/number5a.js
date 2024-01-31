let sync = require('readline-sync');


let bill = Number.parseFloat(sync.question('Enter Total: '));
let tipPercent = Number.parseFloat(sync.question('Enter tip percnet: ')) / 100
let tipTotal = bill * tipPercent;
let grandTotal = (bill + tipTotal).toFixed(2);

console.log(grandTotal)