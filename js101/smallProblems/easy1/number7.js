function shortLongShort(str1, str2) {
	let longStr;
  let shortStr;
  if (str1 > str2) {
  	longStr = str1;
    shortStr = str2;
  } else {
  	longStr = str2;
    shortStr = str1;
  }
  console.log(shortStr + longStr + shortStr);
}




shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"


