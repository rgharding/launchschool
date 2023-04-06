
function doMath() {

let number = Number(prompt('Enter Number'));
let operation = Number(prompt('Enter 1: Add\nEnter 2: Multiply'))


if (operation === 1) {
	sum(number);
} else if (operation === 2) {
	product(number)
}

function sum(num) {
let sumResult = 0; 
let i = 1;
while (i <= num ) {
	sumResult += i
  i += 1
}
	console.log(sumResult);
}

function product(num) {
let prodResult = 1
let j = 1;
while (j <= num) {
	prodResult *= j
  j += 1;
}
	console.log(prodResult);
}
}

doMath();
