function leadingSubstrings(str) {
  let strArr = str.split('');
  let subStr = '';
  
  let subStringArr = strArr.map((element) => {
     return subStr += element
  });

  console.log(subStringArr);
}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]//