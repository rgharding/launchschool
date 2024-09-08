/*
[P]roblem: Given a string, write a function that doubled every character and returns a new stirng

I/O
string
string

Rules: 
  - return value is a string
  - repeat every char

Questions:
  - Are there any restrictions on what is considered a charater? ie spaces and punc?



[E]xamples

I/O? Looks GOOd

question: All characters are fair game

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""


[D]ata Structure

Array: no
Object: no
HelpFunc: no


[A]lgorithm

- Declare a funtion declarattion 'repeater' that has 1 paramenter 'str'
  - declar and ininatilze a variaoble 'doubledStr' to an empty string

  - define a for looop
    - counter 0; conditional < str's length; increment by 1
      -  doubledStr += str[counter] + str[counter]

  return dounledStr
*/

function repeater(str) {
  let doubledStr = ""

  for (let i = 0; i < str.length; i += 1) {
    doubledStr += str[i] + str[i];
  }

  return doubledStr;
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""



function repeater2(str) {
  let repeatedChar = str.split('').map(char => {
    return char + char
  }).join('');

  console.log(repeatedChar);
}

repeater2('Hello');        // "HHeelllloo"
repeater2('Good job!');    // "GGoooodd  jjoobb!!"
repeater2('');             // ""