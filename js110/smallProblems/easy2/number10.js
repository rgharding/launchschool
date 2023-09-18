// When wil I retire


let sync = require('readline-sync');

let currentAge = parseInt(sync.question('Enter Current Age: '));
let retireAge = parseInt(sync.question('Enter retirement age:  '))
let yearsTillRetire = retireAge - currentAge;

let date = new Date()
let currentYear = date.getFullYear();
let retirementYear = currentYear + yearsTillRetire;
console.log(currentYear);

console.log(`The year is ${currentYear}. You are ${currentAge} years old. You will retire in ${yearsTillRetire} ears, at ${retireAge} years old in ${retirementYear}!`);