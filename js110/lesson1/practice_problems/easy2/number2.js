/*
[P]roblem: Write a program that requests a users name, if the user eneters name in regular case with regular punctiation the computer greets the user with their name. If the users screams name (name in all caps or an exlacmation at end), then the are asked why they are screaming.

input: string
output: string

Questions
1. Does all caps mean screaming on input?
2. Does an exclamation mark mean screaming?


[E]xample and test cases
Bob
Hello Bob

Bob!
HELLO BOB. WHY ARE WE SCREAMING

input- Looks good
output- Looks good

[D]ata structure
  Array: no
  Object: no
  Function: yes

[A]lgorithm
  1. Declare a function 'greeting' that take 1 parameter 'name'
  
  2. define an if statement. 
      if name the last character of the string is '!'
      return 'name' in upperase, asking why we are screaming
      The returned name should not contain the '!' point
  
  3. If the name does not contain an '!'
      return a greeting with name

  4. Create a vairbale nameInput that requests a users name

*/

function greeting(name) {
  let result = ""
  if (name[name.length - 1] === '!') {
    result = `HELLO ${(name.slice(0, name.length - 1)).toUpperCase()}. WHY ARE WE SCREAMING?`
  } else {
    result = `Hello ${name}`
  }
  return result
}

let sync = require('readline-sync');

let inputName = sync.question('Please enter name: ');

console.log(greeting(inputName));