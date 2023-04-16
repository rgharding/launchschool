function age(max, min) {
	return Math.floor(Math.random() * (max - min + 1 ) + 20);
}

console.log(`Teddy is ${age(120, 20)} years old.`);


