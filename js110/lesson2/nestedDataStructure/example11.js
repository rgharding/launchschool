/*
Copying objects.

let obj1 = {a: 'foo'}
let obj2 = {b: 'bar'}

Object.assign adds/copies one objects key/val pairs to another obj

Object.assign(target, valueToAdd)

*/


let obj1 = {a: 'foo'}
let obj2 = {b: 'bar'}

Object.assign(obj1, obj2);
console.log(obj1); // { a: 'foo', b: 'bar' }
console.log(obj2); // { b: 'bar' }

obj2.b = 'changed b!!!';
console.log(obj1) // { a: 'foo', b: 'bar' }
console.log(obj2) // { b: 'changed b!!!' }