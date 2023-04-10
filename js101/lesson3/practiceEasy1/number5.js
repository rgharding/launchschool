console.log(false == '0');  // true. this coerces the boolean to its number, 0 for false,  then coerces the string to a number and compares the values 
console.log(false === '0'); // fasle. The strict equality operator does not coerce anything. False is not equal to zero
