function logInBox(str) {
  let strLength = str.length;
  
  let firstLastLine = `+${'-'.repeat(str.length + 2)}+`;
  let spaceLine =  `|${' '.repeat(str.length + 2)}|`;
  let textLine = `| ${str} |`;

  console.log(firstLastLine);
  console.log(spaceLine);
  console.log(textLine)
  console.log(spaceLine);
  console.log(firstLastLine)
  
}
  
  logInBox('To boldly go where no one has gone before.');
  logInBox('');




/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/