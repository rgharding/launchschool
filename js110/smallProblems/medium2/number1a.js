let obj = {
  upperCase: 0,
  lowerCase: 0,
  neither: 0,
}

function letterPercentages(str) {
  
  let length = str.length;

  getLetterCount(str);
  

  for (let key in obj) {
    obj[key] = parseFloat( (obj[key] / length) * 100).toFixed(2);
  }

  console.log(obj);
}

function getLetterCount(inputStr) {
  let regex = /[a-z]/i;
  inputStr.split('').forEach(char => {
    if (regex.test(char)) {
      if (char.toUpperCase() === char) {
        obj.upperCase += 1;
      } else {
        obj.lowerCase += 1;
      }
    } else {
      obj.neither += 1;
    }
  });

}

//letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

//letterPercentages('AbCd +Ef');
//// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
//
//letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



let obj2 = {};

function letterPercentages2(str) {
  let length = str.length;
  let upper = str.match(/[a-z]/g).length;
  let lower = str.match(/[A-Z]/g).length;
  let neither = str.match(/[^a-z]/ig).length;

  obj.upper = ((upper / length) * 100).toFixed(2);
  obj.lower = ((lower / length) * 100).toFixed(2);
  obj.neither = ((neither / length) * 100).toFixed(2);

  console.log(obj);
}

letterPercentages2('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

//letterPercentages2('AbCd +Ef');
//// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
//
//letterPercentages2('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }