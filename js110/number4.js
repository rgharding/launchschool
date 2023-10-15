/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

[P]roblem - Based on enterred dimensions length and with in meters, return the sq footage in both meters and feet.

input - 2 numbers
output - single number for sqft, single number for sqm

Questions
1. is there a preffered way that user inputs data


[E]xample test cases
10meter Length, 10meter Width => 100 sqm  1000sqft


[D]ata Structure
 Array: no
 Object: no

[A]lgorithm

1. Get user input for length;
2. create a variable 'length' and intalize it to user input of length 
    Repeat for 'width'
3. Declare and inatilze variable squareMeters and intalize it to the value of width * width
4. Declare and initilize variable squareFeet and intilize it to the value of squareMeters * 10.7639
5. log to the console the values of squareFeet and squareMeters 


[C]ode with intent
*/

let sync = require("readline-sync");

let length = Number(sync.question('Enter length in meters: '));
let width = Number(sync.question('Enter width in meters: '));

let squareMeters = length * width;
let squareFeet = (squareMeters * 10.7639).toFixed(2);


console.log(`The dimension are ${squareMeters}sqM or ${squareFeet} sqft`);