// Does ages contain Spot
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let isSpot = ages.hasOwnProperty('Spot');

function findSpot () {
  let result;
  for (key in ages) {
    result = key === 'Spot' ? true : false;
 }
 return result;
}

console.log(isSpot);
console.log(findSpot());