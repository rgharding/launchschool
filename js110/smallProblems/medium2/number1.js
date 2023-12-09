let obj = {
  upperCase: 0,
  lowerCase: 0,
  neither: 0
};

function letterPercentages(str) {
  let count = str.length;
  let letterRegex = /[a-z]/i

  for (let char of str) {
    if (letterRegex.test(char)) {
      if (char === char.toUpperCase()) {
        obj.upperCase += 1
      } else {
        obj.lowerCase += 1;
      }
    } else {
      obj.neither += 1;
    }
  }

  console.log(getPercent(obj, count))
  
  
}

function getPercent(obj, strCount) {
  for (let key in obj) {
    obj[key] = ((obj[key] / strCount) * 100).toFixed(2);
  }

  return obj
}

//letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

//letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

//letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



function letterPercentages2(str) {
  let count = str.length;
  let regexUpper = /[A-Z]/g;
  let regexLower = /[a-z]/g;
  let regexOther = /[^a-z]/ig;
  
  return {
    lowerCase: ((str.match(regexLower).length / count) * 100).toFixed(2),
    upperCase: ((str.match(regexUpper).length / count) * 100).toFixed(2),
    neither: ((str.match(regexOther).length / count) * 100).toFixed(2),
  }


}

console.log(letterPercentages2('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

//letterPercentages2('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

//letterPercentages2('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }