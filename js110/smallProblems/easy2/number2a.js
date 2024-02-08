let sync = require('readline-sync');

let name = sync.question('What is your name?\n:')


if (name[name.length - 1] === '!') {
  name = name.slice(0, name.length - 1)
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`)
} else console.log(`Hello ${name}`);