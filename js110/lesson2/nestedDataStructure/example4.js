/*
Other nested Structures

Objects can be nested in arrays as well

let arrOfObjs [ { a: 'apple' }, { b: 'bear' } ]
*/



let arrOfObjs = [ { a: 'apple' }, { b: 'bear' } ];

let x = arrOfObjs[0] // { a: 'apple' }
let y = arrOfObjs[0]['a'] // 'apple'

console.log(x, y) // 