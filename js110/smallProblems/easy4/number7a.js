function wordSizes(str) {
  let countObj = {}
  
  if (str.length === 0) {
    return countObj;
  }

  let strArr = justAlpha(str);

  strArr.map(word => {
    let wordLength = word.length;
    
    if (countObj[wordLength]) {
      countObj[wordLength] += 1;
    } else {
      countObj[wordLength] = 1;
    }
  });

  return countObj;
}


function justAlpha(str) {
  let stringArr = str.split(' ');
  let regex = /[a-z]/i;
  let returnArr = []


  for (let i = 0; i < stringArr.length; i += 1) {
    let word = ''
    
    for (let j = 0; j < stringArr[i].length; j += 1 ) {
      if (regex.test(stringArr[i][j])) {
        word += stringArr[i][j];
      }
    }
    returnArr.push(word)
  }
  
  return returnArr
} 

console.log(wordSizes('Four score and seven.'));                    // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                         // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}