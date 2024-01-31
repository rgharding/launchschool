let sync = require('readline-sync');


let length = sync.question('Enter length: ');
let width = sync.question('Enter width: ')

let sqM =  (length * width).toFixed(2);
let sqFt = (sqM * 10.7639).toFixed(2);

console.log(`SqFt ${sqFt} SqM ${sqM}`);