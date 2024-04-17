function isBalanced(str) {
  let strArr = str.split('');
  
  let parensArr = getParens(strArr)

  if (parensArr.length % 2 === 1) {
    return false;
  } 
  
   let rightOrder = checkOrder(parensArr); 
  return rightOrder;

}



function getParens(strArr) {
  let parensArr = []
  
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] === '(' || strArr[i] === ')') {
      parensArr.push(strArr[i]);
    }
  }

  return parensArr;
}


function checkOrder(parensArr) {
  for (let i = 0; i < parensArr.length; i += 1) {
    if (i % 2 === 0 && parensArr[i] === ')') {
      return false;
    } else if (i % 2 === 1 && parensArr[i] === '(') {
      return false
    }
  }

  return true;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);