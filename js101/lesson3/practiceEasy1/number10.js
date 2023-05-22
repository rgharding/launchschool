let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let index = advice.indexOf('training')
let choppedSentence = advice.slice(0, index)
console.log(choppedSentence);
