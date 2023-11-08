function sum(num) {
  let numArray = String(num).split('');
  let result = numArray.reduce((acc, cv) => {
    return acc += Number(cv);
  } ,0);

  console.log(result);
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45