/*

[P]roblem: 

- Given an array of strings, return a new array SORTED by the amount of adjacent consonants contined in each word. Sort from highest to lowest. Adjacent consonats are consonants that are next to each other in same word or seperated by a space. If 2 strings have same amount of consonants, ranking should be in order they appear. 

  ** I/O **
  -input: array of strings
  -output: array of strings sorted by amount of adjacent constanents. Hi to Low

  ** RULES **
  -Explicit: 
    -Input will be an array
    -Output will be an ordered array
    -If two string have same amount, order by when they appear
    -Spaces are not counted if adjacent letters are consonants
    -adjacent mean next to each other 
  
    -Implicit: 
      -Strings can have multiple words

  ** QUESTIONS **
  -Do we add words that have no repeating consonants?
  -Does case matter?
  -Does puntuation matter, ie ' " " , ?
  -What happens if array contains 0 or 1 element?
  -Are we adding the words to the array or the length of the adjacent constanents. 



  [E]xamples and Test Cases

    console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
        // ['dddaa', 'ccaa', 'aa', 'baa']
    
    console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
        // ['salt pan', 'can can', 'batman', 'toucan']

    console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar']));
         // ['bar', 'car', 'far', 'jar']

    console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
        // ['month', 'day', 'week', 'year']



[D]ata Structure
  - Data structure appears to be a simple array. 


[A]lgorithm  
  -High Level Algorithm. Avoid Implementation Details

  variable:

  1. Create a variable to keep count
  2. Create an empty array


  1. Take array of strings and seperate each element.
  2. Loop thru each element's individual characters.
  3. Test if the character is a constonant or a vowel
      3a. If a vowel move to next character
      3b. If consonant, keep count and Test next character.
      3c. Go back to step 3 and repeat. Once element is completed move to step 4
  4. Add first element to empty array 
  5. Next Element
      5a. Repeat all of step 3
  6. Add new element to array. If it has a higher count than current, the unshift, if lower push
  7. Repeat 5 - 6;




*/


/* 
1. How to we count the adjacent consonants?
  - Isolate each word.
  -Remove any spaces in the words. 

*/

function countMaxAdjacentConsonants(str) {
    str = str.split(' ').join('');
    let count = 0;
    let tempString = '';

    for (let i = 0; i < str.length; i += 1) {
      let letter = str[i];

      if ('bcdfghjklmnpqrstvwxy'.includes(letter)) {
        tempString += letter;
      } else {
        if (tempString.length > 1 && tempString.length > count) {
            count = tempString.length
        }

        tempString = '';
      }
    }
    return count;
}

function sortStringsByConsonants(arr) {

  const letWordArray = arr.map( (word) => {
   return countMaxAdjacentConsonants(word);
  });
  return letWordArray;
}


//console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); 
// ['dddaa', 'ccaa', 'aa', 'baa']

 console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); 
// // ['salt pan', 'can can', 'batman', 'toucan']

// console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar']));
//  // ['bar', 'car', 'far', 'jar']

// console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); 
// ['month', 'day', 'week', 'year']


// function sortStringsByConsonants(strArr) {
//   let newObj = {};
//   let count = 0;
//   let regex = /[aeiou ]/
//   let countArr = [];
//       // dddaa
//   strArr.forEach( (word) => {
//     for(let i = 0; i < word.length; i += 1) {
//       if (regex.test(word[i])) {
//           countArr.push(count);
//           count = 0
//           continue;
//       }   
//       count = count + 1;
			
//     } 
//       let largest = Math.max(...countArr);
     
      
//       newObj[largest] = word;
    	
//   })
//   	return newObj
// }

// console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa', 'edevvvo']));