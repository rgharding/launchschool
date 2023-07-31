/*
Deep Copy
  For a deep copy we need to use the JSON methods

  let arr [ [1], [2]]
  
  let arrStringify = JSON.stringify(arr);
  let copyOfArr = JSON.parse(arrStringify);


*/

let arr = [ {b: 'foo'}, ['bar']];

let arrStringify = JSON.stringify(arr);
let arrCopy = JSON.parse(arrStringify);

console.log(arrCopy);
arrCopy[1].push('qux');

console.log(arrCopy);
console.log(arr);