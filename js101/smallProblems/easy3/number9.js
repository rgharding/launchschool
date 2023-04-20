/*
[P]roblem
Check a string. Any value that is a non alpha, replace with a space. If more than one non-aplha appear in a row, replace all of those character with one space,
I/O string => string

[E]xample and test case

("---what's my +*& line?");    // " what s my line "

I/O looks good... 

[M]ental Model Intermission
-get string => compare it to regex, remove desired parts, return string

[A]lgorithm
-create function that has on parameter. This should recienve a string 
-write a regex to look for non alphabet character
-run regex over string and remove the regex characters
-reassisng string, check string. for removal of characters
-white regex that searches for multiple white space.
-reassign string, run regex over string and replace multiple whitespaces with single white space
- return string

*/


function cleanup(string) {

let regex = /[^a-zA-Z]/g;
let regexSpace = /\s+/g;

string = string.replace(regex, ' ')
							 .replace(regexSpace, ' ');
	
  return string;
}

console.log(cleanup("---what's my +*& line?"));    // " what s my line "
