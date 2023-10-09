let numObj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }

function stringToSignedInteger(str) {
  let newStr;
  
  if (str[0] === '-' ) {
    newStr =  -1 * stringToInteger(str.slice(1))
  } else if (str[0] === '+') {
    newStr = stringToInteger(str.slice(1));
  } else {
    newStr = stringToInteger(str)
  }
    
  return newStr;
}

function stringToInteger(numStr) {
  let newNum = 0;

  for (let number of numStr) {
    newNum = (newNum * 10) + numObj[number];
   }

   return newNum;
}


//console.log(stringToSignedInteger("4321") === 4321); // logs true
//console.log(stringToSignedInteger("-570") === -570); // logs true
//console.log(stringToSignedInteger("+100") === 100); // logs true



function stringToSignedIntegerSwitch(str) {
  switch (str[0]) {
    case '-':
      return -stringToInteger(str.slice(1));
    
    case '+':
      return stringToInteger(str.slice(1));
    
    default:
      return stringToInteger(str);
  }
}
 

console.log(stringToSignedIntegerSwitch("4321") === 4321); // logs true
console.log(stringToSignedIntegerSwitch("-570") === -570); // logs true
console.log(stringToSignedIntegerSwitch("+100") === 100); // logs true