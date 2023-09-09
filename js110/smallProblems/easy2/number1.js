/* Create a function that takes an array of strings that is a persons name, and an object that is a person proffeson, title and occupation. Combine all that info into a string that is a greeting*/

let name = ['John', 'Q', 'Smith']
let occ = {
  title: 'Master',
  occupation: 'Plumber' 
}

function greetPerson(nameArr, occObj) {
  let nameString = nameArr.join(' ');
  let titleRank = occObj['title'];
  let occupationType = occObj['occupation'];
  

  return `Hello, ${nameString}, it is nice to have a ${titleRank} ${occupationType} around!!!`
}

console.log(greetPerson(name, occ));