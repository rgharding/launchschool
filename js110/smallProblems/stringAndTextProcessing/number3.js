function letterCaseCount(str) {
  let countObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }
  
  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
     
    if (char >= 'a' && char <= 'z') {
      countObj.lowercase += 1
    } else if (char >= 'A' && char <= 'Z') {
      countObj.uppercase += 1
    } else {
      countObj.neither += 1;
    }

  }

  console.log(countObj)
}



//letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
//letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
//letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
//letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }



function letterCaseCount2(str) {
  let lowerCaseLetters = str.match(/[a-z]/g) || [];
  let upperCaseLetters = str.match(/[A-Z]/g) || [];
  let neither = str.match(/[^a-z]/ig) || [];

  console.log( {
    lowercaseletters: lowerCaseLetters.length,
    uppercaseletter: upperCaseLetters.length,
    neithercase: neither.length,
  })
}


letterCaseCount2('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount2('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount2('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount2('');            // { lowercase: 0, uppercase: 0, neither: 0 }
