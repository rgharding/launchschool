

let number = Number(prompt('Please Enter Number`));

let sumOrProduct = prompt('Please enter "s" for sum or "p" for product');


let resultArray = []

for (let i = number; i > 0; i -= 1) {
  resultArray.push(i);
}

let result;

if (sumOrProduct === 's') {
  result = resultArray.reduce((acc, cv) => {
    return acc + cv; 
 }, 0)

} else if(sumOrProduct === 'p') {
  result = resultArray.reduce((acc, cv ) => { 
    return acc * cv;
	}, 1); 
}

