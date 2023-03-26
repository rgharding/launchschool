let string = 'launch school tech & talk';


let x = string.split(' ')

 let upperStr = x.map( word => {
	return word.slice(0, 1).toUpperCase() + word.slice(1)
})

upperStr = upperStr.join(' ');
console.log(upperStr)
