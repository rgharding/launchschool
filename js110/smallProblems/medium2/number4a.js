function fridayThe13ths(year) {
  let count = 0;
  for (let month = 1; month <= 12; month += 1) {
    let date = new Date(`${year} ${month} 13`).getDay()
    date === 0 ? count += 1 : count += 0
  }
  console.log(count);
}
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2


