function stringy(num) {
	let numArr = [];
  for (let i = 1; i <= num; i += 1) {
  	if (i % 2 !== 0) {
    	numArr.push(1);
    } else {
    	numArr.push(0);
    }
  }
   console.log(numArr.join(''));
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
