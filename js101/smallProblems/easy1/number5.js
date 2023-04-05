let bill = Number(prompt('What is the bill?'))
let tipPercent = Number(prompt('Enter tip percent:'));

let tip = ((Number(tipPercent / 100)) * Number(bill)).toFixed(2);
let total = Number(bill) + Number(tip);
//let total = totalWithTip.toFixed(2);
//Weird that Number(prompt) was not returning a number that stayed a number;
