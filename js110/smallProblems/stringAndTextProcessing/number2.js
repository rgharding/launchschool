let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function removeVowels(str) {
  let noVowelsArray = [];
  let newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < str[i].length; j+= 1) {
        if (vowels.includes(str[i][j])) {
          continue
        }
        newStr += (str[i][j]);
      }

      noVowelsArray.push(newStr)
    }
  

  return noVowelsArray;
}


//console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
//console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
//console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]



let regex = /[aeiou]/i

function removeVowels2(arrOfStrings) {
  let newArr = [];
  let newStr = ''
  
  for (let element of arrOfStrings) {
    for (let letter of element) {
     
      if (regex.test(letter)) {
        continue;
      } else {
        newStr += letter
      }
    }
      newArr.push(newStr)
  }

  return newArr
}


console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]