/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

[P]roblem. Log all even numbers from 1 to 99 inclusive to the console. 

input - n/a
output - number logged to the console. 1 number per line

[E]xample and test cases
2, 4 .. 98

[D]ata structure 
  array: no
  object: no

[A]lgorithm

1. declare/define a for loop
  - loop count start at 1
  - loop condition till count <= 99
  - count + 1 on each iteration

2. define and if statement
  - if current the remainder of current count divided by 2 is 0
  - log current count to the console
*/

for (let count = 1; count <= 99; count += 1) {
  if (count % 2 === 0) {
    console.log(count);
  }
}