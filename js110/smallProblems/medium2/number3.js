function triangle(...angles) {
  let [a, b, c] = angles;
  let sortedAngles = sortAngles(angles)
  
  return getType(sortedAngles) 
}


function getType(angleArr) {
    let longest = angleArr[0];
    let middle = angleArr[1];
    let shortest = angleArr[2];
    let sum = longest + middle + shortest;

    if (sum !== 180 || angleArr.includes(0)) {
      return 'invalid';
    } else if (angleArr.includes(90)) {
      return 'right';
    } else if (angleArr.every((value => value < 90))) {
      return 'acute';
    } else if (angleArr.some((value => value > 90 ))) {
      return 'obtuse'
    }

}





function sortAngles(angleArr) {
  angleArr.sort((a, b) => {
    if (a > b) {
      return - 1
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  return angleArr;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"