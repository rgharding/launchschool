function staggeredCase(string) {
  let regex = /[a-zA-Z]/;
  let count = 0;
  let newStr = ''

  for (let i = 0;i < string.length; i += 1) {
    let char = string[i];

    if (regex.test(char)) {
      if (count % 2 === 0) {
        newStr += char.toUpperCase();
        count += 1
      } else {
        newStr += char.toLowerCase();
        count += 1;
      } 
    } else {
      newStr += char;
    }
}
 
  return newStr;
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
//console.log(staggeredCase("ALL CAPS") === "AlL cApS");
//console.log(
//staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
//);