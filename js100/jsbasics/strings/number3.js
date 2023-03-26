function repeat(num, str) {
	let newStr = '';
  for (let i = 1; i <= num; i+= 1) {
		newStr +=  str
  }
  return newStr
}

console.log(repeat(3, 'ha')); // 'hahaha'
