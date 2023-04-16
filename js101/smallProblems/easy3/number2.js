function logInBox(str) {
	let horRule = `+${'-'.repeat(str.length + 2)}+`;
  let vertRule = `|${' '.repeat(str.length + 2)}|`;
  let textLine = `| ${str} |`
  
  console.log(horRule);
  console.log(vertRule);
  console.log(textLine);
  console.log(vertRule);
  console.log(horRule);
}



logInBox('To boldly go where no one has gone before.');
logInBox('');
