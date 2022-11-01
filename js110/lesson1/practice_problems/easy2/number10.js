/*
[P]roblem: Write a program that gets users current age and the age they would like to retire. Output to the user their current age and how many more years until retirement. The program will also tell the user the current year and the year they will be retiring in. 

input: 2 numbers
output: 2 numbers and strings

Rules: 
  1. Ages need to be eneterd as integers

Questions: 
 1. Integers only? 

[E]xamples test cases

age: 60
Retire age: 65

=> Its 2023, you are 60 years old. You only have 5 years of work to go!

Answers: 
  No, but will assume we are working with integers only


[D]ata Structue
  Array: no
  Object: no
  Function: yes/ Not need but I will build this as a function.


[A]lgorithm

1. Define a fucntion declaration 'yearsToGo' that has no parameter
2. Declare and intalize variable 'age' to the user input of asking current age
3. Declare and intalize varibale 'retirementAge' to the user input asking how old retire
4. Declare and intalize varibale 'date' to current year.
5. return to the user in a string, 
      their current age, 
      the current year,
      year they will retire (year + age)
      How many Years left of work (retirment age - current age);
      
  *** How to get current date  ***
    This varies by language
    javascript use new date

  *** How to get user input ***
        Use method that allows to run in node

[C]ode with intent    
*/


function yearsToGo() {
  const sync = require('readline-sync');

  let age = sync.question('Enter current age: ');
  let retireAge = sync.question('What age do you want to retire? ');
  let date = new Date;
  let currentYear = date.getFullYear();

  return `It's ${currentYear}. You will retire in ${currentYear + (retireAge - age)}\nYou have only ${retireAge - age} years of work to go!`
}


console.log(yearsToGo());
