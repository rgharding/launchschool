function wordSizes(string) {
  let stringArray = [];
  if (string) {
    stringArray = regexString(string).split(' ');
  } 
  
  let wordObj = makeObjKeys(stringArray);
  
  stringArray.forEach( (word) =>  {
    if (word.length === 0) {
      wordObj = {};
    } else {
      wordObj[word.length] += 1;
    }
  })
  
  return wordObj;
}

function makeObjKeys(array) {
  let obj = {}
  array.forEach( (word) => {
    obj[word.length] = 0;
  });
  return obj;
}

function regexString(changeString) {

  let regex = /[\w\s]/ig;
  changeString = changeString.match(regex).join('')
  return changeString;
}




console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}