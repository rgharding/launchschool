// Create a mad lib

let sync = require('readline-sync');

let noun = sync.question('Enter a noun: ');
let verb = sync.question('Enter a verb: ');
let adj = sync.question('Enter an adjective: ');
let adverb = sync.question('Enter an adverb: ');

console.log(
  `Do you walk your ${adj} ${noun} ${adverb}? That is hilarious!`
);

console.log(`The ${adj} ${noun} ${verb} ${adverb} over the lazy turtle`)