// Total the utf values for all charaters in a string


function utfValue(str) {
  let count = 0
  for (let i = 0; i < str.length; i += 1) {
    count += str.charCodeAt(i);
  }
  
  return count;
} 

console.log(utfValue('Four score'));
console.log(utfValue('Launch School'));
console.log(utfValue('a'));
console.log(utfValue(''));