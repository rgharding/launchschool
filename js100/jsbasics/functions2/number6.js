function removeLastChar(str) {
let newStr = str.slice(0, str.length - 1);
	return newStr;
}


function removeLastChar2(str) {
	let strArr = str.split('');
  strArr.pop();
  let rejoin = strArr.join('');
	return rejoin;  
}



console.log(removeLastChar2('ciao!')); // 'ciao'
console.log(removeLastChar2('hello')); // 'hell'
