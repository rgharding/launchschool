/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

[P]roblem - log to the console all of the odd numbers from 1 to 99. Include 1 and 99 in the log;

input - 
output - number

[E]xample and test cases
 - test case would be 1 - 99 logged to console

[D]ata structure
 array: no
 object: no

[A]lgorithm
1. define a for loop.
  - loop counter starts at 1
  - loop condition counter <= 99
  - loop increment counter + 2 on each iteration
2. log the current counter number to the console

[C]ode with intent
*/

for (let count = 1; count <= 99; count += 2) {
  console.log(count);
}