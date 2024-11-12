/*
[P]roblem: given 3 digits that represent lengths of triagle, detrmine the type of triangle it is.

I/O
3 digits
string

Rules: 
  - to be triangle, no side can be 0;
  - the sum of 2 shortest sides must be greater that longest
  - type of triange 
    - equalateral: all sides are the same
    - isosoles: two sides are the same
    - scalene: all sides are different

[E]xamples: 

I?O: Looks Good.


triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"


[M]emtal model Intermission

get numbers ->  sort numbers from smallest to largest -> assign each digit in order largest smallest ect -> check if any number is 0 -> check if shortest 2 are longer that longest


[D]ata Structure:
Array: yes (deatucture parameter to an arryay to sort)
Object: no
HelpFunc: yes, to determine if it is valid triangle


[A]lgo
- Define a function declaration 'triangle' that has 3 parameters (use spread)
  - declare and initalize a variable 'sides' to the deconstucted value of the parameter sorted 
  - declare and initalize 3 varriable, shortest, middle, longest to the values of initalize arr
     deconstruct

  **is valid (passed array of short, med, long) **

      if is(valid)
        - if (if all sides are the same length)
            return 'equaleral
        
        -else if (2 sides are the same return isoles)
        -else reterun 'scalene 
    
      - else return 'not a valid trianlge'


  ** HELP FUNC **
  - Define a function declaraton 'isValid' that takes in an array
    
    - define an if statement
      if parameterArr included 0
        return 'false'
    - if (shortest + med < longest) 
       return false
    -  else return true


*/


function triangle(...param) {
  let [shortest, middle, longest] = [...param].sort((a, b) => a - b)
  
    if (isValid(shortest, middle, longest)) {
        return typeOfTriangle(shortest, middle, longest);
    } else {
        return 'INVALID';
    }
  }


function isValid(...param) {
    let [a, b, c] = param;
  
    if (param.includes(0)) {
      return false;
    } else if (a + b < c) {
      return false;
    }

    return true;
  }


  function typeOfTriangle(...params) {
    let [a, b, c] = params

    
     if (a === b && a === c && b === c) {
      return 'equilateral';
    } else if ((a === b && a !== c) || (b === c && b !== a)) {
      return 'isosoles'
    }
    else {
      return 'scalene'
    }
  } 


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"