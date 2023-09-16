/*
Write a ramdom program that generates "Teddy's" age and prints it to the console.
Age will be from 20 to 120 inclusive

Teddy is 55 years old
*/

function logAge(max, min) {
  let randomAge = Math.floor(Math.random() * (max - min + min) + min)

  return `Teddy is ${randomAge} years old`;
}

console.log(logAge(120, 20))



