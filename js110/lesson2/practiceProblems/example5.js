//Compute and display the total age of the male members of the family.


let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
}

//let maleAgeTotal = 0;

// for (let name in munsters) {
//   if (munsters[name].gender === 'male') {
//     maleAgeTotal += munsters[name].age
//   } 
// }

//console.log(maleAgeTotal);

let maleAges = Object.keys(munsters)
              .filter((name) => munsters[name]['gender'] === 'male')
              .reduce((acc, currentName) => {
                return acc += munsters[currentName]['age'];
              }, 0);
console.log(maleAges);
