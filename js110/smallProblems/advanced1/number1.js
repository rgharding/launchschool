let wordsToAdd = {
  nouns: ['boat', 'fox', 'dog', 'computer', 'pencil'],
  verbs: ['runs', 'sleeps', 'sneezes', 'pulls', 'farts'],
  adverb: ['lazily', 'loudly', ' quietly', 'softly', 'aggresivly'],
  adjective: ['fast', 'hard', 'ugly', 'sweet', 'burnt']
}

function getRandomNoun() {
  let nounArr = wordsToAdd.nouns;
  let length = nounArr.length;
  let randomNum =  Math.floor(Math.random() * (length - 0 + 0) + 0);
  
  return nounArr[randomNum];
}

function getRandomVerb() {
  let nounArr = wordsToAdd.verbs;
  let length = nounArr.length;
  let randomNum =  Math.floor(Math.random() * (length - 0 + 0) + 0);
  
  return nounArr[randomNum];
}

function getRandomAdverb() {
  let nounArr = wordsToAdd.adverb;
  let length = nounArr.length;
  let randomNum =  Math.floor(Math.random() * (length - 0 + 0) + 0);
  
  return nounArr[randomNum];
}

function getRandomAdj() {
  let nounArr = wordsToAdd.adjective;
  let length = nounArr.length;
  let randomNum =  Math.floor(Math.random() * (length - 0 + 0) + 0);
  
  return nounArr[randomNum];
}

function madlibs(template) {
  let libs = ['noun', 'verb', 'adverb', 'adjective'];
  let madLibArr = []

  let wordArr = template.split(' ')

  wordArr.forEach(word => {
    switch (word) {
      case '%{noun}':
        madLibArr.push(getRandomNoun());
        break;

      case '%{verb}':
        madLibArr.push(getRandomVerb());
        break;
        
      case '%{adverb}':
        madLibArr.push(getRandomAdverb());
        break;
      
      case '%{adjective}':
        madLibArr.push(getRandomAdj());
        break;

      default:
        madLibArr.push(word);
    }
})
    console.log(madLibArr.join(' '))

}

// These examples use the following list of replacement texts:
//adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------/ 


let template1 = "The %{noun} %{verb} %{adverb} %{adjective}";
let template2 = "The noun verb adverb adjective";


madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

//madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

//madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

//madlibs(template2);      // The "cat" "pats" the "cat"'s "head".


