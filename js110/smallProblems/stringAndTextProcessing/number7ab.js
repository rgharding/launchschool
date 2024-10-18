/*
[P]roblem: Given a string, return swap everyother upper and lowerCase char, ignore the non alpha chars when determing every other 

I/O
string
string

Rules:
  - Return string with every other alpha characters case swapped
  - do not count non alpha characters when deteming every other char
  - non alphaChars should be included


[E]xamples

I?O: look good

  -console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
  -console.log(staggeredCase("ALL CAPS") === "AlL cApS");
  -console.log(
    staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

[D]ata structure
Array: yes
Object: no
HelpFunc: no


[A]lgoritm

-Define a function declaration 'staggeredCase' that has 1 paramenter 'str' 
  - declare and initalize variable 'regex' to the value of only alpha chars
  - declare and initalize varuable 'count' to value of 0;
  
  - declare and initalize variable 'staggeredStr' to the value of:
    - convert 'str' to an array seperated by each charater
    - MAP over this value
      - define an if statement
        - if current char passes regex 
          - if count % 2 === 0
            - increment count by 1
            - return currentChar as upperCase
          - else
            - increment count by 1 
            - return currentChar as lowerCase
        - else 
          return current char

    return the joined value of 'staggeredStr' 
*/


function staggeredCase(str) {
  let regex = /[a-z]/i
  let count = 0;
  
  let staggeredCase = str.split('').map(char => {
    if (regex.test(char)) {
      if (count % 2 === 0) {
        count += 1 
        return char.toUpperCase();
      } else {
        count += 1
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('')
  
  return staggeredCase;
}

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );




function staggeredCase2(str) {
  let regex = /[a-z]/;
  let needUpper = true; 

  let stagger = str.split('').map(char => {
    char = char.toLowerCase();
    if (regex.test(char)) {
      if (needUpper) {
        needUpper = false;
        return char.toUpperCase();
      } else {
        needUpper = true;
        return char.toLowerCase();
      }
    } else {
      return char
    }
  });
  
  return stagger.join('');
}

console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
 staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);