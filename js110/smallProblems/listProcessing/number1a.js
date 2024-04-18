function sum(num) {
    let strArr =  String(num).split('')
    let returnVal = strArr.reduce((acc, cv) => {
      return acc += Number(cv); 
    } ,0);

    return returnVal;

};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45