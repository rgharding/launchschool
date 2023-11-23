function wordCap(str) {
  let strArr = str.split(' ');
  let capitalizedWords = strArr.map(word => {
    let upperCase = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return upperCase;
  }).join(' ')

  console.log(capitalizedWords)
}


wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'