function leadingSubstrings(str) {
  let subStrings = [];

  for (let i = 1; i <= str.length; i += 1) {
    let newSubString = str.slice(0, i);
    subStrings.push(newSubString) 
  }
  console.log(subStrings)
}




leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]