function reverseWords(str) {
  let strArr = str.split(' ');
  let newStrArr = []

  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i].length >= 5) {
      let revStr = strArr[i].split('').reverse().join('');
      newStrArr.push(revStr);
    } else {
      newStrArr.push(strArr[i]);
    }
  }

  return newStrArr.join(' ');
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"