/*
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.
Words consist of any sequence of non-space characters.
*/


function wordSizes(inputStr) {
  let strArr = inputStr.split(' ');
  let resultObj = {}

  strArr.forEach(word => {
    let wordLength = (word.length);

    if (wordLength === 0) {
      return resultObj;
    }

    if (resultObj.hasOwnProperty(wordLength)) {
      resultObj[wordLength] = resultObj[wordLength] += 1;
    } else {
      resultObj[wordLength] = 1;
    }
 });

  return resultObj;
}


//console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
//console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
//console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
//console.log(wordSizes(''));                                            // {}


function wordSizes2(inputStr) {
  let strArr = inputStr.split(' ');
  let resultObj = {};

  for (let i = 0; i < strArr.length; i += 1) {
    let wordLength = strArr[i].length;

    if (wordLength === 0) {
      continue;
    }

    if (!resultObj[wordLength]) {
      resultObj[wordLength] = 0;
    } 
      resultObj[wordLength] += 1;
  }

  return resultObj;l
}


console.log(wordSizes2('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes2("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes2(''));                                            // {}
