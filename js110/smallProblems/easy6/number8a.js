function reverseWords(str) {
  let wordArr = str.split(' ');
  let resultStrArr = []

  wordArr.forEach(word => {
    if (word.length >= 5) {
      let newWord = revWord(word);
      resultStrArr.push(newWord);
    } else {
      resultStrArr.push(word);
    }

     
  });

  return resultStrArr.join(' ');
}


function revWord(word) {
  let revWord = word.split('').reverse().join('');
  return revWord;
};


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"