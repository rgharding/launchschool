let sync = require('readline-sync');


let lengthInM = sync.question('Enter length in M: ');
let widthInM = sync.question('Enter width in M: ');

let sqM = (lengthInM * widthInM).toFixed(2);
let sqFt = (sqM * 10.7639).toFixed(2);

console.log(`The room in sqM is ${sqM}`)
console.log(`The room in sqFt is ${sqFt}`)