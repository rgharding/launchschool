// What is the return value of map in the following code? Why?

[1, 2, 3].map((num) => {
  num * num;
});  // [undefined, undefined, undefined];


/* This will return a new array: [undefined, undefined, undefined]. The method called is the map method. This method returns and uses a value for every element in the calling array. In our example here, we do not have a return statement in our callback function. Therefore the return value of the callback function is undefined. This will be the return value of each element in the calling array
*/