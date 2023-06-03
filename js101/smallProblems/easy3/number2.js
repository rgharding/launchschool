function logInBox(str) {
  let topAndBottom = `+${'-'.repeat(str.length + 2)}+`
  let sides = `|${' '.repeat(str.length + 2)}|`;
  let text = `| ${str} |`;


  console.log(topAndBottom);
  console.log(sides);
  console.log(text);
  console.log(sides);
  console.log(topAndBottom);

}


logInBox(`Guess this was how it was done in the old days!!!`);