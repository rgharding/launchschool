function shortLongShort(str1, str2) {
  let longer;
  let shorter;

  if (str1.length > str2.length) {
    longer = str1;
    shorter = str2;
  } else {
    longer = str2;
    shorter = str1;
  }
  return shorter + longer + shorter;
}




console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));   // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
