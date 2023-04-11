let numbers = [1, 2, 3, 4, 5];
//numbers.reverse();
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

//numbers = [1, 2, 3, 4, 5];
//numbers.sort((num1, num2) => num2 - num1);
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let revArr = [];

for (let i = numbers.length - 1; i >= 0; i -= 1) {
	revArr.push(numbers[i]);
}

//console.log(revArr);
console.log(numbers);

let arr = numbers.map( number => {
		return number
});
arr.reverse();
console.log(arr);


let revNums = numbers.slice().reverse();
let newNums = [...numbers].reverse()

console.log(newNums)
console.log(numbers);

let revArr = [];
numbers.forEach( (number) => {
	revArr.unshift(number)
});

console.log(revArr);
