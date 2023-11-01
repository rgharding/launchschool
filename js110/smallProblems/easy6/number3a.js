function reverseNumber(num) {
  let numStr = String(num);
  let revNum = numStr.split('').reverse().join('');
  let newNum = parseInt(revNum);

  console.log(newNum);
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

// Number.prototype.parseInt   removes leading zeros