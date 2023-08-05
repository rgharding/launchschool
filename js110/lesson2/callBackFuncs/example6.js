// get an array of of the elements where the key matches the first letter of the value
let arr = [
  { a: 'ant', b: 'elephant'},
  { c: 'cat', d: 'dog'}
];



let filteredArr = arr.filter((obj) => {
  let objKeys = Object.keys(obj);
  return objKeys.some(key => obj[key].slice(0, 1) === key);
});

console.log(filteredArr);

/*
ACTION: CALLED ON: SIDE EFFECT:  RETURN VALUE: RETURN VALUE USED

filter method outer arr: no side effect: return value new selected array: return value NOT used

callback funtion: called on inner elements of arr: no side effect: return value false, true: return value used yes used to determine what elements get passed to new array

Object.keys method: called on the inner elements(obj): side effect it sets varaiable objKeys: 
return value an array of the inner elements object keys in an array: return value used: yes

every method call: called on the objKeys array: side effect: no: return value boolean: return value used yes it determines what boolean get passed to outer filter method

callback function: called on elements of objKeys: side effect None: return value: boolean: return value used yes. it gets passed up to the filter method call

Array.prototype.slice method call: called on the key/value of obj: return value string: return value used: yes it is used in strict comparison with the key value to create boolean we pass up to filter


*/
