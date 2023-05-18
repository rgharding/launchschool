function greetings(arr, obj) {
  let name = arr.join(' ');
  let title = obj.title;
  let occupation = obj.occupation;

  return `Hello, ${name}! Nice to have a ${title} ${occupation} joining us!`
}


let personArr = ['Bob', 'R',  'Smith'];

let personObj = {
  title: "Journeyman",
  occupation: 'Electrician',
}

console.log(greetings(personArr, personObj));


