/*
Copying nested objects

let arr = [ {a: 'foo'}, {b: 'bar'}, {c: 'qux'}];

*/


let arr = [ {a: 'foo'}, {b: 'bar'}, {c: 'qux'}];
let copyOfArr = [...arr];

console.log(arr);
console.log(copyOfArr);

copyOfArr[1].d = 'randomDumbThing';
console.log(arr); //  [ {a: 'foo'}, {b: 'bar', d: 'randomDumbThing}, {c: 'qux'}];
console.log(copyOfArr) // [ {a: 'foo'}, {b: 'bar', d: 'randomDumbThing}, {c: 'qux'}];



// BE AWARE AT WHAT LEVEL IN A COPYIED ARRAY YOU ARE WORKING!!!