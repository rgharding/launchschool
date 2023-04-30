let mD = "The Munsters are creepy and spooky.";

let asWanted = mD.toUpperCase().split(' ').map(word => {
  return word[0].toLowerCase() + word.slice(1);
  })

