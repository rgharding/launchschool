function substrings(str) {
  let subStrArr = [];

  for (let i = 0; i < str.length - 1; i += 1) {
    for (let j = 1; j <= str.length ; j+= 1) {
      let subStr = str.slice(i, j);
      subStrArr.push(subStr);
    }
  }

  return orderedArr(subStrArr)
  
}

function orderedArr(arr) {
  return arr.filter(element => element !== '');

}
// 01234
// abcde

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

