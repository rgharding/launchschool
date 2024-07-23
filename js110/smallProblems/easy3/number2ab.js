function logInBox(str) {
  let length = str.length;
  let uppersAndLowers = `+${'-'.repeat(length + 2)}+`;
  let spacers = `|${' '.repeat(length + 2)}|`;
  let text = `| ${str} |`


  console.log(uppersAndLowers);
  console.log(spacers);
  console.log(text);
  console.log(spacers);
  console.log(uppersAndLowers);
}


logInBox('Hello');