// get middle character of a string. 1 character is length is odd, 2 if length is ever

function centerOf(string) {
  let length = string.length;
  let middle;

  if (length % 2 === 0) {
   
    let start  = (length / 2) - 1;
    let end = (start + 2);
    middle = string.slice(start, end);
  } else if (length % 2 === 1) {

    let start = Math.floor(length / 2);
    let end = start + 1;
    middle = string.slice(start, end);
}

  return middle
}

console.log(centerOf('I Love Javascript')); // a
console.log(centerOf('Launch School')); // ' ' 
console.log(centerOf('Launch')); // 'un'
console.log(centerOf('Launchschool')) // 'hs
console.log(centerOf('x')) // x