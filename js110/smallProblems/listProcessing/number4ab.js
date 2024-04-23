function leadingSubstrings(str) {
  let subStringArr = [];

  for (let i = 1; i <= str.length; i += 1) {
    let subString = str.slice(0, i);
    subStringArr.push(subString);
  }

  return subStringArr;
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]