let sync = require('readline-sync');

function greetings(fullName, job) {
  let name = fullName.join(' ');
  let { title, occupation } = job;
  
  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.