/*Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.
*/

let characters = 'abcedf0123456789';

function randomNum(max) {
  let str = '';

  while (str.length < max) {
    let letter = characters[Math.floor(Math.random() * (max - 0) + 1)]
    
    str += letter
  }
    return str;
}



 

function makeUUID() {

  let id = `${randomNum(8)}-${randomNum(4)}-${randomNum(4)}-${randomNum(4)}-${randomNum(12)}`

  return id
}




let newUUID = makeUUID();
console.log(newUUID);