function twice(num) {
  let strNum = String(num);
  
  let firstHalf;
  let secondHalf;
  let half = (strNum.length / 2);
  
  
  if (strNum.length % 2 === 0) {
    firstHalf = (strNum.slice(0, half))
    secondHalf = strNum.slice(half);

    return  isSame(firstHalf, secondHalf, num)
  } else {
    return num + num;
  }

}


function isSame(str1, str2, num) {
  if (str1 === str2) {
    return num;
  } else {
    return num + num;
  }
}



console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676