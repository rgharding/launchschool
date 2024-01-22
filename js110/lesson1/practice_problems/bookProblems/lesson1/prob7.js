// What is the return value of map

let x = ['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

console.log(x);

// a new array [undefined, 'bear']. Map is a transformative method, so the return array will have the same number of elements as the original array. Since the inplicit return value of map is undefined, that is what will be returnred for the first element as the return statement is nestled in an if statement that the first element does not meet the condition for. The second element will be return since it makes a truthy value in the if statement conditional 
