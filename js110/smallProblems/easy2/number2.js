/*
Wtite a program that asks for users name. Program will greet the user. If the user writes 'name!', then the computer yells back at person
*/

let sync = require('readline-sync');

let name = sync.question('What is your name?: ');

if (name[name.length - 1] === "!") {
  name = name.slice(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}! WHY ARE WE SCREAMING???`);
} else {
  console.log(`Hello ${name}, pleasure to meet you!`);
}