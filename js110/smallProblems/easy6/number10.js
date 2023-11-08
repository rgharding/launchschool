function isBalanced(str) {
  
  let parensObj = {
    ')': 0,
    '(': 0,
  }

  for (let char of str) {
    if (char === '(') {
      parensObj[char] += 1
    } else if (char === ')' ) {
      parensObj[char] += 1
  }
}
  
  let openParensCount = parensObj[')'];
  let closedParensCount = parensObj['('];
  let indexOfOpenParens = str.indexOf('(');
  let indexOfClosedParens = str.indexOf(')');
  let lastIndexOfOpenParens = str.lastIndexOf('(');
  let lastIndexOfClosedParens = str.lastIndexOf(')');


    if (openParensCount === 0 && closedParensCount === 0) {
      return true
    } else if ( (openParensCount === closedParensCount) && (indexOfOpenParens < indexOfClosedParens) && (lastIndexOfOpenParens <   lastIndexOfClosedParens) ) {
      return true;
    } else {
      return false;
    }
  
  

}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);