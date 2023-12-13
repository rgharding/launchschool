function fridayThe13ths(inputYear) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let fridaysCount = 0;


  months.forEach(month => {
    let newDate = new Date(`${inputYear}, ${month}, 13`);
    let day = newDate.getDay();
    
    if (day === 5) {
      fridaysCount += 1
    }
  })

  return fridaysCount
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2



// function fridayThe13ths(year) {
//   let thirteenths = [];

//   for (let month = 0; month < 12; month += 1) {
//     thirteenths.push(new Date(year, month, 13));
//   }

//   return thirteenths.reduce((count, day) => {
//     return day.getDay() === 5 ? (count + 1) : count;
//   }, 0);
// }
