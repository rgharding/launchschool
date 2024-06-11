/*
nestedDataStructure

using asign with an empty array as a target!


*/

let obj = {a: {c: 'This is nested'}, b: 'qux'};
let objCopy = Object.assign({}, obj);
console.log(obj);
console.log(objCopy);


objCopy.a.c = "nested was changed";
console.log(obj);
console.log(objCopy);


objCopy.a = 'newA';
console.log(obj);
console.log(objCopy);


// Shallow copies do not copy nested elements. The nested elements of the copy and the original share the same pointers