// What is return value of filter problem and why?

[1, 2, 3].filter(num => 'hi');

/* return val --> [1, 2, 3] a new array
- All values are returned. Fileter test whether the return value is truthy. Since a non-empty string evaluates to true, all elements are returned

*/