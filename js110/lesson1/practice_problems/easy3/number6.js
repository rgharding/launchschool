/*
[P]roblem: write a program that asks the user for a noun, verb, adjective, adverb and add it to an madlib

input: strings
output: string


[]
*/

let sync = require('readline-sync')

let noun = sync.question('Enter a noun: ');
let verb = sync.question('Enter a verb: ');
let adverb = sync.question('Enter a adverb: ');
let adjective = sync.question('Enter a adjective: ');


   console.log(`${noun} ${verb} ${adverb} ${adjective}`);