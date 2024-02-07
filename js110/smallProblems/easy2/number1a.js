let sync = require('readline-sync');


let obj = {
  title: '',
  occupation: ''
}


function greetings(nameArr, jobObj) {
  let name = nameArr.join(' ');
  let title = jobObj.title;
  let occupation = jobObj.occupation;

  return `Hell ${name}, nice to have a ${title} ${occupation} around!`
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.