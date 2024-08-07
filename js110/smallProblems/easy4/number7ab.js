function wordSizes(str) {
  let obj = {};
  let justLettersArr = removeNonLetters(str);

  for (let i = 0; i < justLettersArr.length; i += 1) {
      let wordLength = justLettersArr[i].length
    
      if (wordLength === 0) continue;

    if (obj[wordLength]) {
      obj[wordLength] += 1;
    } else {
      obj[wordLength] = 1
    }
}

  console.log(obj)
}

function removeNonLetters(str) {
  let strArr = str.split(' ');
  let justLettersArr = [];
  
  for (let i = 0; i < strArr.length; i += 1) {
    let word = strArr[i];
    justLettersArr.push(word.replace(/[^a-z]/ig, ''));
  }

  return justLettersArr;
}

wordSizes('Hey!!!!')
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

