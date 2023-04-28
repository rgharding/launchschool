function swap(string) {
    let strArr = string.split(' ');
    let firstLetter;
    let lastLetter;
    
    
    let result = strArr.map( (word) => {
      if (word.length <= 2) {
       return word.split('').reverse().join('');
       } else {
       
       firstLetter = word.slice(0, 1);
       lastLetter = word.slice(word.length - 1);
       return lastLetter + word.slice(1, word.length - 1) + firstLetter;
       }
    })
    
    console.log(result);
    
}




swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
//swap('Abcde');                          // "ebcdA"
//swap('a');                              // "a"