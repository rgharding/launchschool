// What is the return value of map in this case? Why?

let x = [1, 2, 3].map((number) =>  number * number) // [1, 4, 9];
console.log(x)

/*
This will return a new array with the following values: [1, 4, 9]. This differs from the last example in terms of syntax. This array does not contain blocks {}. Since it does not conatain blocks {} the => acts as an implicit return statement. When blocks are used 'return' must explicity be used.
*/