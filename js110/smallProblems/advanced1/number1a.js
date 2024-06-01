const RANDOM_WORDS = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  verbs:['jumps', 'lifts', 'bites', 'licks', 'pats'];
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly'];
};

function getRandom(arr) {
  let min = 0;
  let max = arr.length; 
  console.log(arr);
  return arr[Math.floor(Math.random() * (max - min) + min)];
  
}


function madlibs(template) {
  const LIST = ['nouns', 'verbs', 'adjectives', 'adverbs'];
  let newLib = template.split(' ').map((word) => {
    if (LIST.includes(word)) {
      if (word === 'nouns') {
        return getRandom(nouns);
      } else if (word === 'verbs') {
        return getRandom(verbs);
      }


    } else {
      return word;
    }
  });

  console.log(newLib)
}


let madLib = 'This random nouns , was verbs , adverbs ,  adjectives ok.';

madlibs(madLib)