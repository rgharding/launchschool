function wordSizes(str) {
  let strArray = str.split(' ');
  let countObj = {};

  for(let i = 0; i < strArray.length; i += 1) {
    let key = strArray[i].length;
    
    
    if (key === 0) {
      continue;
    }
    
    if (!countObj[key]) {
        countObj[key] = 0;
    }
      countObj[key] = countObj[key] + 1;
  }


  return countObj
}


console.log(wordSizes("Four score and seven! and seven!")); // {"3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!"));
// console.log(wordSizes("What's up doc?"));
// console.log(wordSizes(""));