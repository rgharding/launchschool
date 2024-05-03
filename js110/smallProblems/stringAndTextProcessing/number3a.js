// function letterCaseCount(str) {
//   let obj = {
//     uppercase: 0,
//     lowercase: 0,
//     neither: 0
//   }

//   let regex = /[a-z]/i

//   for (let i = 0; i < str.length; i += 1) {
//     let char = str[i];

//     if (regex.test(char)) {
//       if (char.toUpperCase() === char) {
//         obj.uppercase += 1
//       } else if (char.toLowerCase() === char){
//         obj.lowercase += 1
//       }
//     } else {obj.neither += 1};
//   } 

//   console.log(obj);
// }




// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }






function letterCaseCount2(str) {
  let obj = {
    uppercase: 0,
    lowercase: 0,
    neither: 0,
  }


  obj.uppercase = str.match(/[A-Z]/g).length || [];
  obj.lowercase = str.match(/[a-z]/g).length || [];
  obj.neither = str.match(/[^a-z]/ig).length || [];

  console.log(obj);
}


 letterCaseCount2('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
 //letterCaseCount2('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
 //letterCaseCount2('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
 //letterCaseCount2('');            // { lowercase: 0, uppercase: 0, neither: 0 }