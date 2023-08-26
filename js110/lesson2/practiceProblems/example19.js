// Remember The Munsters from earlier questions? For this problem, you are tasked with creating a deep copy of the munsters object, whose nested objects cannot be altered.

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let deepCopy = {}

for (let name in munsters) {
  let key = name;
  let val = JSON.parse(JSON.stringify(munsters[name]));
  
  Object.freeze(deepCopy[key] = val);
}

//console.log(deepCopy);

let deepCopy2 = JSON.parse(JSON.stringify(munsters), (stringifiedKeyVals, vals) => Object.freeze(vals));

munsters.herman.age = 3123412432
deepCopy2.herman.age = 243523453245
console.log(munsters);
console.log(deepCopy2);

