let sync = require('readline-sync');
// Build a program that gets user input length and width in meters, then gives the area in sqM and sqFt

// 1 sqM ==== 10.7639 sqFt


let length = Number(sync.question('Enter length in meters: '));
let width = Number(sync.question('Enter with in meters: '));

let sqM = (length * width).toFixed(2)
let sqFt = (sqM * 10.7639).toFixed(2);

console.log(`The size of the room is: ${sqM}sqM or ${sqFt}sqFt`);