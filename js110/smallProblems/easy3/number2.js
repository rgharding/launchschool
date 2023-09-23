// write a function that will take a string and log it to the console in a box


function logInBox(str) {
  let strLength = str.length;
  let topAndBottom = `+${'-'.repeat(strLength + 2)}+`;
  let spaceLine = `|${' '.repeat(strLength + 2)}|`;
  let textLine = `| ${str} |`;

  console.log(topAndBottom);
  console.log(spaceLine);
  console.log(textLine);
  console.log(spaceLine);
  console.log(topAndBottom);
}



let str = 'Try This!'

logInBox(str);