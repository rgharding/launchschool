/*
Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let arrs = Object.values(obj);
arrs.forEach(innerArr => {
  innerArr.forEach(word => {
      let regex = /[aeiou]/
      let vowels = word.match(regex);
      vowels.forEach(letter => console.log(letter));
  })
  });
