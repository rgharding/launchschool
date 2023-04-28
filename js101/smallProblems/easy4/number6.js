/*
[P]roblem - take a string and return an object that the key is the length of the word and the value is how many words are that length. All non-space values are counted

I/O: 
- string
- object

[e]xample and test cases:
- wordSizes("What's up doc?") => { "2": 1, "4": 1, "6": 1 }
I/O's seem to be working properly;

[m]ental model intermission -
string => make into object => length of words are keys => number of words at each length is values;

[d]ata structue 
- Object? YES

[a]lgorithm 
-convert string to an array of words, include any punctiation.
-create an object;
-get the length of each letter and form an object key from the value of the length;
-set the value of each key to 0;
-for every word that has the length of the objects key, add 1 to that value;

*/


function wordSizes(string) {
  let sortedWords = {};
  let wordArray = string.split(' ');

  wordArray.forEach( (word) => {
    sortedWords[word.length] = 0;
  });
   
  
  wordArray.forEach( (word) =>  {
    if (word.length === 0) {
      sortedWords = {};
    } else if (sortedWords.hasOwnProperty(String(word.length))) {
      sortedWords[String(word.length)] = sortedWords[String(word.length)] += 1
    };
  }); 
  console.log(sortedWords);
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}