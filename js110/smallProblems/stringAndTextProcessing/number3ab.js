/*
[P]roblem: given a string write a function that returns the number of uppercase, lowercase charaters and characters that are neither upper of lower alpha

I/O
str
obj

Rules: 
  - alpha upper/lower and everything else are seperate categories
  - spaces are considered a charater
  - return value is an object

Question:
  - how to treat and empty input


[E]xample and

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


[D]ata Structure

Array: no
Object: yes
HelpFunc: no


[A]lgorithm

- Define a functioni declarattion 'letterVcaseCaount' that has 1 param 'str'
  - declare and initalze a variable 'charCount' to the following:
    an object witht the following key/vals   lowercase: 0, uppercase: 0, neither: 0
    
  - declare and initalize a variable 'regex' to the value of all alpha chara  
  
  *** begin for/of
  - define a for/of loop that loops thru each charatcter
    - define an if statement:
      - if char tested against regex
          -if char is equal to char[toLowerCase]:
            charCount[lowercase] += 1
          - else:
            charCount[uppercase] += 1
      
      - esle:
        char[count]neither += 1
  *** end for/of
  
  return charCount

[C]ode with Intent
*/  


function letterCaseCount(str) {
  let regex = /[a-z]/i
  let countObj = {
    lowercase: 0,
    uppercase: 0,
    neigther: 0
  };

  for (let char of str) {
    if (regex.test(char)) {
      if (char === char.toUpperCase()) {
        countObj.uppercase += 1
      } else  {
        countObj.lowercase += 1
      }
    } else {
      countObj.neigther += 1
    }
  }


  return countObj;
}

//console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
//console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
//console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
//console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }



function letterCaseCount2(str) {


    let upper = str.match(/[A-Z]/g) || []
   let lower = str.match(/[a-z]/g) || []
  let none = str.match(/[^a-zA-Z]/g) || [];


  return    {lowercase: lower.length, uppercase: upper.length, neither: none.length};

}

console.log(letterCaseCount2('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount2('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }




