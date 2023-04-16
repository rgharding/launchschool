function crunch(str) {
	let arr = [];
  	let strArr = str.split('');
    for (let i = 0; i < strArr.length; i += 1) {
    	if (strArr[i + 1] !== strArr[i]) {
   		 arr.push(strArr[i]);
    }
   }
   return arr.join('');
}
