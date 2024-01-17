// What is return value

[1, 2, 3].map(num => {
  num * num
});


/*
This will return a new array [undefined, undefined, undefined]. There is no explicit return value on this problem, it needs one because of the {} syntax if the problem. The implicit return value of map is undefined, and that is what will be returned for each element of the original array
*/