function cleanUpWords(inputStr) {
  let regex = /[a-z0-9]/i

  if (inputStr.length === 0) {
    return [];
  }

  let wordArray = inputStr.split(' ').map((word) => {
    let newWord = ''
    
    for (let letter of word) {
      if (regex.test(letter)) {
        newWord += letter;
      }
    }
    return newWord
  });


  return wordArray;
}




function wordSizes(inputStr) {
  let justLegalCharactersArray = cleanUpWords(inputStr);
  let countObj = {};

  for (let i = 0; i < justLegalCharactersArray.length; i += 1) {
    let wordCount = justLegalCharactersArray[i].length;
    
    if (justLegalCharactersArray.length === 0) {
      continue;
    }

    if (countObj[wordCount]) {
        countObj[wordCount] += 1
    } else {
      countObj[wordCount] = 1
    }
  }


  console.log(countObj);
}




wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}