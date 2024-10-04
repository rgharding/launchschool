function searchWord(searchWord, text) {
  let noPunctuationArr = noPunc(text); 

  let matchesNum = noPunctuationArr.filter(word => {
    return searchWord.toLowerCase() === word.toLowerCase()
  }).length;

  return matchesNum
}

function noPunc(text) {
  let wordArr = text.split(' ').map((word) => {
    if (  /[^a-zA-Z]/.test(word[word.length - 1]) ) {
      return  word.slice(0, word.length - 1)
    } else {
      return word;
    }
  });

  return (wordArr);
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

//searchWord('sed', text);      // 3


function searchWord2(wordSearch, textToSearch) {
  
  let regex = new RegExp(wordSearch, 'gi');
  let numberOfMatches = textToSearch.match(regex);
  
  console.log(numberOfMatches)
}

searchWord2('sed', text);

