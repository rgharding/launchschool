// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5); // arr => [1, 1, 1, 1, 1, 1]
console.log(arr);

/*
I am not sure how Array.prototype.fill() works. I will find out be checking the documentation. 
The fill method is Destructive. It modifies the original array. The fill method, the first arguement is a static value that will be used in all indexes selected by the second and third arguments. This static value will mutate the array at that index, replacing current value with the mutated value. 
*/