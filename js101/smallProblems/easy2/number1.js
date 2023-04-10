function greetings(arr, obj) {
	let stringFromArray = arr.join(' ');
  let keysFromObj = Object.keys(obj);
  return `Hello, ${stringFromArray}! Nice to hava a ${obj[keysFromObj[0]]} ${obj[keysFromObj[1]]} around!`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around!
