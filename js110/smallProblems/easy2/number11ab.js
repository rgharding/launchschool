function centerOf(str) {
  if (str.length % 2 === 0) {
    return (str.slice( ((str.length / 2) - 1), (str.length / 2) + 1)) ;
  } else {
    return str.slice( (str.length / 2), (str.length / 2) + 1);
  }
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"



