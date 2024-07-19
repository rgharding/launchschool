let sync = require('readline-sync');

let currentAge = sync.question('Current Age: ');
let ageToRetire = sync.question('Age you want to retire:');
let currentYear = new Date().getFullYear();
let yearsToRetire = ageToRetire - currentAge
let retireYear = currentYear + yearsToRetire;

console.log(`The year is ${currentYear}. You are ${currentAge}. You will retire at ${ageToRetire} in ${yearsToRetire} years in ${retireYear}`);
