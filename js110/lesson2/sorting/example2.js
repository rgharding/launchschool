let ex1 = [null, 'a', true, 1].sort()

let ex2 =  [undefined, 11, 'z', 'x', 'y', undefined].sort()




console.log(ex1) // [ 1, 'a', null, true ];
console.log(ex2) // [ 11, 'x', 'y', 'z', undefined, undefined ]

/*
 - undefined is treated specially and alway places at the back of the array when using (sort) method with no arguments.  undefined is NOT converted to a string like every thing else
 
 
 -- For self
  - Test the sort method with NaN
*/

let selfTest = [1, 'a', true, false, undefined, NaN, 'Take an educated quess'].sort();
console.log(selfTest)
//quess is  [1, 'a', false, NaN, 'Take an', undefined ]
// actual [1, NaN, 'Take an', 'a', false, true, undefined]
// Seems that capitol letters have a lower Unicode value that lowerCase strings