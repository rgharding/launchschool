function cleanWords(str) {
  let strArr = str.split(' ');
  let regex = /[^a-z]/ig
  let cleanArr = [];

  strArr.forEach((word) => {
    cleanArr.push(word.replace(regex, ""));
  })
  return cleanArr
}


function wordSizes(str) {
  let cleanWordArr = cleanWords(str);
  let obj = {};

  for (let i = 0; i < cleanWordArr.length; i += 1) {
    let keyName = cleanWordArr[i].length;
      
    if (keyName === 0) {
      continue;
    }
    
    if (!obj[keyName]) {
      obj[keyName] = 0;
    }
    obj[keyName] = obj[keyName] + 1;
  }
  return obj;
}

//console.log(wordSizes("Four score and seven! and I'm seven!")); 
// console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!"));
console.log(wordSizes("What's up doc?"));
// console.log(wordSizes(""));
