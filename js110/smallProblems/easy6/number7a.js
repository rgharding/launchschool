function reverseSentence(str) {
  let strArr = str.split(' ').reverse().join(' ');
  console.log(strArr);
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"