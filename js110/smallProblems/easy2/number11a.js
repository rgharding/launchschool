function centerOf(str) {
  let length = str.length;
  let middle = Math.floor(str.length / 2)
 
  if (str.length % 2 === 0) {
    console.log(str.substring(middle - 1, middle + 1));
  } else {
    console.log(str.substring(middle, middle + 1))
  }
}

centerOf('abcd') // b
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"