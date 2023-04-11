let flint = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

flint = flint.flat();
console.log(flint)

let newArr = []
flint.forEach( name => {
	newArr = newArr.concat(name);
})

console.log(newArr);
