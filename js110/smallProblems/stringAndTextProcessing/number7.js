function staggeredCase(str) {
  let regex = /[a-z]/i
  let count = 0;

  return str.split('').map((char) => {
    if (regex.test(char)) {
      if (count % 2 === 0) {
        count += 1
        return char.toUpperCase();
      } else {
        count += 1;
        return char.toLowerCase()
      }
    } else {
      return char;
    }
  }).join('')

}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log('Z'.charCodeAt())


// 'a' 97
// 'z' 122
// 'A' 65
// 'Z' 90