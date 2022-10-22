/*
What is the callback's return value in the following code? Also, what is the return value of every in this code?
*/

let arr = [1, 2, 3]
let x = arr.every((num) => {
  return num = num * 2;
})  

/*
This will return true for the every method call. The every element tests wheter EVERY element in an array returns true when tested in the callback function. In this example the callback function reassings the callbacks argument to itself times 2. In our exapmple since all of the calling arrays elements are numbers, they all return a truthy value when returned from the callback function. So the every method will say True, it is true that all the elements of the calling array have a truthy value when ran thru the callback function.

The callback functions return values on each iteration will be 2, 4, 6. Each of these values is truthy so the above paragraph is using these values. 
*/