let age = Number(prompt('How old are you?'));
let retireAge = Number(prompt('when would you like to retire?'));
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + (retireAge - age)}. You have ${retireAge - age} years to go`);
