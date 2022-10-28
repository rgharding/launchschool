/*
[P]roblem: write a script that return true is exaclty 1 of the arguments is true. Of the 2 arguments true is returned only when just 1 argument is truthy

input: two arguments
output: boolean

[E]xample Test Cases:
 5, 0 === true // true
 false, true === // true


[D]ata Structure
  Array: no
  Object: no
  Function: yes

[A]lgorithm
  1. Define a function declaration xor that takes 2 parametes
        
  *** Sub routine
  2. Define an statement that returns true only if 1 of the parameters is true
      if:  
        true && !false => true 
        is the only criteria that works for this
  
  3. Return false otherwise


[C]ode with intent

*/

  //
function xor(parameter1, parameter2) {
  if (( !true && false ) || ( true && !false )) {
    //  false && false   ||   true && true
    return true  
  }
  return false
}

console.log(xor());