function shortLongShort(str1, str2) {
  let long;
  let short;

  if (str1 > str2) {
    long = str1;
    short = str2
  } else {
    long = str2;
    short = str1
  }

  console.log( short + long + short );
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"