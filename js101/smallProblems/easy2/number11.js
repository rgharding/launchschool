function centerOf(str) {
	if (str.length % 2 === 0) {
  	console.log(str[(str.length / 2) - 1] + str[str.length / 2]);
  } else {
  	console.log (str[(str.length - 1) / 2]);
	}
}


centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
