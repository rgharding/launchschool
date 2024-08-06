function wordSizes(str) {
  let obj = {};
  
  if (str.length === 0) return obj

  let wordArr = str.split(' ');
  
  for (let i = 0; i < wordArr.length; i += 1) {
    let wordLength = wordArr[i].length;
    if (wordLength === 0 ) continue;

    if (obj[wordLength]) {
      obj[wordLength] += 1
    } else {
      obj[wordLength] = 1
    }
  }
  
  return obj
}




//console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
//console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
//console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}