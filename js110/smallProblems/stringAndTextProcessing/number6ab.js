/*
[P]roblem:  given a string, return a new string with every other charater capitolized. 

I/O 
string
string

Rules -
  - new string should have every other alpha char capitoliezd
  - capitolizatioin begins with first element

Questoin -
  - Are non capitol element considered when spacing charaters, is it like even Capitol, odd not>



[E]xample:
I?O: looks goood

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

Answer Question: 
  - look like even alpha chars are capitolized and odds are lower case


[D]ata structure

Array: yes
Object: no
HelpFunc: no



[A]lgorithm

- Define a function declaration 'stafferedCase' that has 1 param 'str'
  - declare and initalize variable 'regex' to the range of all alpha characters
  - declare and initalize variable 'staggeredStr' to the value of:
    - str convert to an array split by each char ->
       map over that array ->   
       -define an if statement: 
        -if current value passed regex
        - if curretn index % 2 === 0 return char upperCase || return charter lowercae
        - else return current char
        
        
  - return the value of 'staggeredStr' joined by space

*/


function staggeredCase(str) {
  let regex = /[a-z]/i
  let staggeredArr = str.split('').map((char, index) => {
    if (regex.test(char)) {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    } else {
      return char
    }
  }); 

  return staggeredArr.join('');
}

//console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
//console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
//console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


let str = '4strTY9'
console.log(str.toUpperCase());