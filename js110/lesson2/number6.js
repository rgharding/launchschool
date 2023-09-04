// Write a function that takes two strings as arguments and returns the strings concatenated shorter longer shorter


function shortLongShort(str1, str2) {
  let long = '';
  let short = '';

  if (str1.length > str2.length) {
      long = str1;
      short = str2;
  } else {
    long = str2;
    short = str1;
  }

  return `${short}${long}${short}`
}

console.log(shortLongShort('abc', 'defgh')); // 'abcdefghabc'
console.log(shortLongShort('abcde', 'fgh')); // 'fghadbdefgh'
console.log(shortLongShort('', 'xyz')); // 'xyz;