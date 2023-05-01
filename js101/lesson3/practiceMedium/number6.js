let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false

/*
This is false because NaN !== NaN.This is the only Javascript element that does not equal itself.
*/

console.log( isNaN(nanArray[0]));ode 