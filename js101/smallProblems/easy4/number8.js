// function swap(str) {
//   let strArr = str.split(' ');

//   let newArr = strArr.map((word) => {
//       let wordArr = word.split('');
      
//       let firstLetter = wordArr.shift()
//       let lastLetter = wordArr.pop();
//       wordArr.push(firstLetter);
//       wordArr.unshift(lastLetter);
    
//       return wordArr.join('');
//     })
//     return newArr.join(' ');
//   }


//console.log(swap('Oh what a wonderful day it is'));
//console.log(swap('Abcde'));
//console.log(swap('a'));



function swap(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i += 1) {
    strArr[i] = firstToLastSwap(strArr[i]); 
  }
  return strArr.join(' ');
}


function firstToLastSwap(str) {
  let badSpelling = str[str.length - 1] + str.slice(1, -1) + str[0];
  return badSpelling;
}


let properString = 'Hello Tim'

console.log(swap(properString));

console.log(swap2('Oh what a wonderful day it is'));
console.log(swap2('Abcde'));
console.log(swap2('a'));