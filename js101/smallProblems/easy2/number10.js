function daysTill(curAge, retAge) {
    let yearsTill = retAge - curAge;
    let todayYear = new Date().getFullYear();

    let retireYear = todayYear + yearsTill
    return `It's ${todayYear}. You will retire in ${retireYear}\nYou have only ${yearsTill} years of work to go!`
}

let currentAge = prompt('Current Age?');
let retireAge = prompt('What age to retire?');

console.log(daysTill(30, 70));