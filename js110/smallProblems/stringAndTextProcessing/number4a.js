function wordCap(str) {
  return str.split(' ').map(word => {
     return capWord(word)
  }).join(' ');

  r
}

function capWord(str) {
 return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

}


console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'