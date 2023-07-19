/* 
Sorting a nested array


*/

let playersScores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

let sortedScores = playersScores.sort((a, b) => {
  let aTotal = a.reduce((acc, cv) => acc += cv);
  let bTotal = b.reduce((acc, cv) => acc += cv );

  return aTotal - bTotal;
});

console.log(sortedScores);