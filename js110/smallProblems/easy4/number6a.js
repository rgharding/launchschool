function wordSizes(str) {
  let strArr = str.split(' ');
  let countObj = {}

  for (let i = 0; i < strArr.length; i += 1) {
    let wordLength = strArr[i].length;

    if (wordLength === 0) {
      continue;
    }

    if (countObj[wordLength]) {
      countObj[wordLength] += 1
    } else {
      countObj[wordLength] = 1;
    }
  }

  console.log(countObj);
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}