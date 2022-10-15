/*
[P]roblem - create a simple tip calculator. The calculator will take a cost, take a tip percentage and output a tip total, and total price

input - s
output - s

Questions:
1. will tip pecentage be a whole  or a decimal?
2. How many decimal places do we want are s to be?
3. Do we want to round up or down on any of the fugures 

[E]xample and test cases

cost: 10
tip percent: 10%
tip amount: 1$
total: 11$

input/outputs: they look good

[D]ata Structure
  Array: no
  Object: no

[A]lgorithm

1. Create a prompt that takes user input
2. Get cost from user
3. declare variable 'cost' and initalize it for user input of cost
4. Get tip percent from user as a whole . 
5. declare and intalize variable 'tipPercent' to the value of tipPercent input / 100
6. declare and intalize variable 'tipTotal' to tipPercent * cost
7. declare and intalize variable 'totalCost' to tipTotal + cost
8. log cost, tipPercent, tipTotal and totalCost to the console

[C]ode with intent
*/

const sync = require('readline-sync');

let cost = Number(sync.question('Please enter cost: $'));
let tipPercent = (sync.question('Please enter tip percentage (whole number): ')) / 100;

let totalTip = Number((cost * tipPercent).toFixed(2));
let totalCost = Number((cost + totalTip).toFixed(2));

console.log(`The cost: $${cost}`);
console.log(`Tip Percent: %${tipPercent * 100}`);
console.log(`Tip Amount: $${totalTip}`);
console.log(`Total: $${totalCost}`);