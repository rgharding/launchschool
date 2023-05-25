function xor(arg1, arg2) {
  if ( (arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  }
  return false
}

console.log(xor(12, '') === true); //
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false) // true;