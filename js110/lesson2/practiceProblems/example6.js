// Print to the console '(Name) is a (age)-year-old (male or female).' from provided object

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// let names = Object.keys(munsters);

// names.forEach(name => {
//   let firstName = name;
//   let age = munsters[name].age;
//   let gender = munsters[name].gender;

//   console.log(`${firstName} is a ${age}-year-old ${gender}`);
// });


let keyVals = Object.entries(munsters);
keyVals.forEach(person => {
  let firstName = person[0];
  let age = person[1]['age'];
  let gender = person[1]['gender'];

  console.log(`${firstName} is a ${age}-year-old ${gender}`);
});