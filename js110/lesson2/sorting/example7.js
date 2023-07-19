/*
let words = ['go', 'ahead', 'and', 'jump'];
sort this array be length of words
*/

let words = ['go', 'ahead', 'and', 'jump'];

let sortedArray = words.sort((a, b) => a.length - b.length);

console.log(sortedArray);
// ['go', 'and', 'jump', 'ahead'];