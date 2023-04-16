function negative(num) {
	if (num > 0) {
  	return num * -1;
  } else if (num === 0) {
  	return  -0;
  } else {
  	return num;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
