/*
[P]roblem: given a string that spells out digits, return a string with the digist in number form in the string

I/O:
string
string


Rules: 
  - convert all of the 'numberWords' to their string digit


[E]xample and test

I?O: looks good

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."


[D]ata structure
Array: yes
Obj: no
HelpFunc: no

[A]lgo

- Define a function declaraion 'wordToDigit' that has 1 parameter 'str' 
 - declare and initalize variable 'strArr' to the value of str split to individual words
 - let updatedStrARr = empty array
 - declare and initalize variable 'wordToNum' to an obfect of 'wordStr' key to numStr value
 - declare and initalize variable 'regex' to a new regex with word boudries


 - define a loop for 'strArr'
  - define an if statement
    - currentValue last character is not a letter
      **Helper Fucntion  
        charter as argumetn 
        Help fuction returns array
      **
      
      -declare and initalize fisrtPart to returnValue of helpFunction 0 
      -declare and initalize secondPart to returnValue of helpFunction 1
      
      - defince another if statement
        - if obj[firsttPart] 
          -firstPart = obj[firstPart]
        - else 
            updatedString push firstPart + secondPart 
      
    - else
        updatedString push currentValue
      

  return strArr joined


** helperFuncton **
- define a function delcartiaon 'checkLastChar' that has 1 paramenter 'word'
  - declare and inialize variable 'wordSeperatedArr' to an empty array
  - push word.sliced from begining to befor last char
  push word.sliced last char

  return checkLastChar


  */







let numObj = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8', 
  nine: '9',
}


function wordToDigit(str) {
  let strArr = str.split(' ');
  let regex = /[^a-z]/i
  let newStringArr = []

  for (let i = 0; i < strArr.length; i += 1) {
    let currentWord = strArr[i];
    let length = currentWord.length - 1

    if (regex.test(currentWord[length])) {
      let firstPart = currentWord.slice(0, length);
      let lastPart = currentWord.slice(length);
      
      if (numObj[firstPart]) {
        firstPart = numObj[firstPart];
      }

      newStringArr.push(firstPart + lastPart);
      continue
    }
    
    if (numObj[currentWord]) {
      newStringArr.push(numObj[currentWord]);
    } else {
      newStringArr.push(currentWord)
    }
  }

  return newStringArr.join(' ')
}


//console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."



function wordToDigit2(str) {

  Object.keys(numObj).forEach(key => {
    let regex = new RegExp(`${key}`, 'ig');
    str = str.replace(regex, numObj[key])
  });

  return str;
}


console.log(wordToDigit2('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."