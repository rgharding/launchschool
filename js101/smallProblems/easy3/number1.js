function crunch(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i+= 1) {
    if (str[i] !== str[i - 1]) {
      result = result + str[i];
    }
  }
  return result;
} 


console.log(crunch("ddddaaaiiiiilllyyyy ddddoooouuuuubbbbllleeee"));
console.log(crunch("44444abcabccba"));
console.log(crunch("gggggggggggg"));
console.log(crunch('a'));
console.log(crunch(''));