let sync = require('readline-sync');

let noun = sync.question('Enter a noun: ');
let verb = sync.question('Enter a verb: ');
let adverb = sync.question('Enter an adverb: ');
let adjective = sync.question('Enter an adjective: ');


let madLib = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`

console.log(madLib);
