let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let arr = Object.entries(person);

//console.log(arr)


let arr1 = []

for (let prop in person) {
		arr1.push([prop, person[prop]]);
}
console.log(arr1);
