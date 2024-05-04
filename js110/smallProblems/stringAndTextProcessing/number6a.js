function staggeredCase(str) {
  let editedStr = ''

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i]
    if (i % 2 === 0) {
      editedStr += char.toUpperCase();
    } else {
      editedStr += char.toLowerCase();
    }
  }

  console.log(editedStr);
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"