/*
[P]roblem: gtiven an array of string, return and array of strings with the vowels removed

-I/O
Array
Array

Rules: 
  - elements of return array should not contain vowles
  - vowels to elimintate both upper and lower


[E]xample and test cases

['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


[D]ata Structure
Array: yes
Object: no
HelpFunc: no


[A]log
- Define a function declaration 'removeVowels' that has 1 parameter 'str'
 - declare and initalize vsariable 'noVowels' to an empty arr
 - declae and initalize variabel 'regex' to a regex of all upper and lower case vowels'

 - define a loop that iterates thrue each individual element of array
  - define an if statement
    - declare and initalize noVowelELement 
    if currentElement meets regex
      noVowelElement =  replace current char with an empty str ''

      push noVowelElement onto noVowelsArr
    --- end of loop

    return noVowelsArr
    
*/


function removeVowels(strArr) {
  let resultArr = [];
  let regex = /[aeiou]/ig
  
  strArr.forEach(str => {
    let newStr = str.replace(regex, '');
    resultArr.push(newStr);
  });
  
  return console.log(resultArr)
}


removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]