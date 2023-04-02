let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

function cloneObj(paramObj) {
	return Object.assign({}, paramObj);
}

let objCopy = cloneObj(obj);
console.log(objCopy);
