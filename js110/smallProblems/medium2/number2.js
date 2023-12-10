function triangle(...sides) {
  let [a, b, c] = sides;
  
    let sortedSides = sides.sort();
    let shortest = sortedSides[0];
    let middle = sortedSides[1];
    let longest = sortedSides[2];

    
    if (shortest + middle < longest || sortedSides.includes(0)) {
      return 'invalid'
    }

    if (shortest === middle && shortest === longest) {
      return 'equalatiral'
    } else if (shortest === middle || middle === longest) {
      return 'isocoles'
    } else {
      return 'scalene'
    }
     

    


}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"