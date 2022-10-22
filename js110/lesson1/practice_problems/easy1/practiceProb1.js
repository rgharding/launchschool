// What is the return value of the filter method call below? Why?

console.log([1, 2, 3].filter((num) => 'hi')); // [1, 2, 3]

/*
The return value of this code snippet will be a new array with the values of 1, 2, 3 in it 
=> [1, 2, 3];

The reason for this is that the filter method checks if the return condition is truthy. If it is in fact a truthy value, the return function returns the element element in the array that is being tested. In our example here, value of the return function is a truthy value, the string 'hi'. Though we arent' testing the current element against this truthy value, it will still return true and the filter method will then return the current element of the index it is drawing from. Since they all will be truthy, this will return the all of the elements of the original array. 

After running the code I see that the return value is correct
*/