let sync = require('readline-sync');

let name = sync.question('Enter name: ');

   if (name[name.length - 1] === '!') {
    name = name.slice(0, -1)
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING!`)
   } else {
    console.log(`Hello ${name}`);
   }

