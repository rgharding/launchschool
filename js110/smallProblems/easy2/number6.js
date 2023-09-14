/*
Write a function that returns the next to last word in the String passed to it as an argument. Words are seperated by empty spaces
 */


function punultimate(string) {
  let stringArr = string.split(' ');
  return stringArr[stringArr.length - 2];
}

let x  = punultimate('last word')  === 'last'
let y = punultimate('Launch school is great') === 'is'
//console.log(x, y)



function returnMiddle(str) {
  let strArr = str.split(' ');
  
  if (strArr.length % 2 === 0) {
      let evenStart = (strArr.length / 2) - 1
      let evenStop = ((strArr.length / 2) + 1);
      return strArr.slice(evenStart, evenStop).join(' ');   
 } else {
    let oddStart = Math.ceil(strArr.length / 2) - 1 ;
    return strArr[oddStart]
 }

}

console.log(returnMiddle('one;'));
console.log(returnMiddle('one two three four five six seven'));
