let sync = require('readline-sync');
let date = new Date();
let year = date.getFullYear();


let currentAge = sync.question('Enter current age: ');
let retireAge = sync.question('Age to retire: ');
let yearsTillRetire = retireAge - currentAge;
let retireYear = year + yearsTillRetire;

console.log(`Your age is: ${currentAge}. You will retire in ${retireYear}. That is ${yearsTillRetire} years away. You will be ${retireAge}`);