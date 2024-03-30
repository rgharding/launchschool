// function digitList(num) {
//   let returnArr = [];

 
//   do {
//     let currentNum = num % 10;
//     returnArr.unshift(currentNum);
//     num = (num - currentNum) / 10;
//   } while (num > 0)
    
//   console.log(returnArr);

//   }


// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]




function digitList2(num) {
  let strArr = String(num).split('')
  
  let numArr = strArr.map(element => parseInt(element, 10));
  console.log(typeof numArr[0])

}


digitList2(12345);       // [1, 2, 3, 4, 5]
digitList2(7);           // [7]
digitList2(375290);      // [3, 7, 5, 2, 9, 0]
digitList2(444);         // [4, 4, 4]