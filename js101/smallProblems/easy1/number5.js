// This will be a simple tip calculator
let billAmount = Number.parseFloat((prompt('Enter Bill Amount')));
let tipPercent = Number(prompt('Enter tip percentage'));
let tipDecimal = tipPercent / 100;

let tipAmount = (tipDecimal * billAmount).toFixed(2);
let total = (tipAmount + billAmount).toFixed(2);


console.log(`bill: ${billAmount}, tipPercent: ${tipPercent}, Tip Amount: ${tipAmount}, Total: ${total}`);   
