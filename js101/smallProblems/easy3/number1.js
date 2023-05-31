// Repeat this function without turning string into an array.

function crunch(str) {
  let newStr = [];
  let strArr =str.split('');
  
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] !== strArr[i - 1]) {
      newStr.push(strArr[i]);
    }
  }
  
  return newStr.join('');
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double" 
console.log(crunch("444abcabccba")); //'4abcabcba
console.log(crunch("ggggggggggggg")); //'g' 
console.log(crunch("a")); //'a'
console.log(crunch(""));// '' 