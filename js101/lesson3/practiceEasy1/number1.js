
let numbers = [1, 2, 3];
numbers[6] = 5;

/* This will not raise an error. Javascript will implicity assign the empty indexes with undefined until it reached index 6. At index 6 it will assign the 
 number 5 to that index. 

number[4] => undefined;
*/
