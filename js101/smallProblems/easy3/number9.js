function cleanUpText(str) {
  let newStr = '';
  let regex = /[a-z]/i

  for (let index = 0; index < str.length; index += 1) {
    if ( regex.test(str[index]) ) {
      newStr += str[index]
   
    } else if (index === 0  || newStr[newStr.length - 1] !== " " ){
      newStr += " ";
    }
  }
  return newStr;
}

let string = "---What's my +*& line?";
console.log(cleanUpText(string));
