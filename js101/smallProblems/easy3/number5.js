/*
PEMDAC
[P]
make a right triangle that has a base of the length provided. Each triangle should have 90degree side on the right and the angle or hypotnouese on the left side. 

I/O Takes a number
		Outputs strings

[E]  4 base length
   *
  **
 ***
****  

[Mental Model]
takes in number (length of base) => output that number of characeters in strings

[Data Structure and Algorithm]
This problem does not need and object or an array

[A]lgorithm

- Declare a funciton triangle, that takes a single arugument (a number)
- Inside the function, define a loop that takes the number of the counter and adds the counter number of this (*) character to a string. 
- Pad the  begining of the string with whitespace. The total length of the string should be the number passed to the argument. First whitespace, followed by 
the counter number of the the string '*' 
- output/print each line to the console. 


[C]ode with intent
*/


function tri(desiredLengthOfString) {
	let starCharacter = '*';
	let finalString; 
  	for (let howManyStars = 1; howManyStars <= desiredLengthOfString; howManyStars += 1) {
 			finalString = starCharacter.repeat(howManyStars).padStart(desiredLengthOfString, " "); 	
      console.log(finalString);
  }
}

tri(5)
