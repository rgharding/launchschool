let numbers = [1, 2, 3];
numbers[6] = 5;

// [1, 2, 3, und, und, und, 5]
//console.log(numbers);
//console.log(numbers.length);
//console.log(numbers[5])

let mappedNum = numbers.map( num => num );
console.log(mappedNum);

/*
This will not return an error. It will return the array with the number of items, from the last index with a value to the next index with a value as empty. In our case here there will be 3 empty items;
*/