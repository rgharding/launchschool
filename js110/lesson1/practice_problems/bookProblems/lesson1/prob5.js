// What will return from callback

let x = [1, 2, 3].every(num => {
  return num = num * 2;
});
console.log(x);

/*
The return value of the call back function will be true. In the problem we are reassigning the value of num to a truthy value. There for 'every' element tested with evaluate to true; 
*/
