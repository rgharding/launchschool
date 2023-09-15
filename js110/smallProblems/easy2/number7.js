// funrtion that returns true if only 1 of its arguments out of two is truthy, otherwise it returns false;


function xor(param1, param2) {
    if ( (!param1 && param2)  || (param1 && !param2)) {
        return true
    } else {
      return false
    }
};

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
console.log(xor(0, false) === false);
console.log(xor(0, 0) === false);