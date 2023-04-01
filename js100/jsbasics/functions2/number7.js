const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

//console.log(sentence('like', 'birds'));
// logs: I like birds.

let sentenceArrow = ((verb, noun) => {
	return template.replace('VERB', verb).replace('NOUN', noun);
})

console.log(sentenceArrow('like', 'birds'));
