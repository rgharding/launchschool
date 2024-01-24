// Pick yougest age from object

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let youngest = Object.values(ages).sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1
  } else return 0
})[0]
console.log(youngest);