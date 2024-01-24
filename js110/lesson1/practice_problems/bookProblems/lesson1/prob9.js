// add up all the ages

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAges = Object.values(ages).reduce((acc, cv) => {
  return acc += cv
} ,0);

console.log(totalAges);