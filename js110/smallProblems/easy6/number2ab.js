/*
[P]roblem: given a string, return a string with every vowel doubled. 

I/O
string
string

Rules: 
  - return string with every vowel doubled
  - all other charaters are returned as is


[E]xample

('String');          // "SSttrrinngg"
('Hello-World!');    // "HHellllo-WWorrlldd!"
('July 4th');        // "JJullyy 4tthh"
('');                // ""

I?O: Looks goodd


[D]ata structure: 
Array: yes. for the includes test
Object: no
HelpFunc: no


[A]lgorithm

Define a function declaration "doubleConsonats" that has 1 parameter 'str'
  - declare and initalize 'retrunrStr' to an emptyStr
  - declare and inialize variable 'regex' to the regex value of all vowels, upper and lowercase

  - define a for loop,
    -couneter = 0; loop condiditn < str's length; counter + 1 
      - Define and if  statement
        - if str[counter] includes 'regex'
            'returnStr += str[counter] + str[counter]
        -else
            'returnStr += str[counter];


   return returnStr         
*/


function doubleConsonants(str) {
  let regex = /[bcdfghjklmnpqrstvwxyz]]/ig
  let doubleVowels = "";

  for (let i = 0; i < str.length; i += 1) {
    if (regex.test(str[i])) {
      doubleVowels += str[i] + str[i]
    } else {
      doubleVowels += str[i];
    }
  }

  //console.log(doubleVowels);
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""


function doubleConsonants2(str) {
  let letters = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']

  let doubleStr = str.split('').map(char => {
    if (letters.includes(char.toLowerCase())) {
      return char + char
    } else {
      return char;
    }
  }).join('');

  console.log(doubleStr)
}


doubleConsonants2('String');          // "SSttrrinngg"
doubleConsonants2('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants2('July 4th');        // "JJullyy 4tthh"
doubleConsonants2('');                // ""