function getAvg(grades) {
  return Math.floor((grades.reduce((acc, cv) => {
    return acc += cv
  } ,0) / grades.length));
};


function getGrade(...grades) {
  let avg =  getAvg(grades);
  let result = '';

  switch(true) {
    case (avg >= 90):
      result = 'A';
      break;
    
    case (avg < 70 && avg >= 60):
      result = 'D';
      break;
  }
  


  return result
}



console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

/*
if (avg >= 90) {
  result = 'A';
} else if (avg < 90 && avg >= 80) {
  result = 'B';
} else if (avg < 80 && avg >= 70) {
  result = 'C';
} else if (avg < 70 && avg >= 60) {
  result = 'D';
} else {
  result  = 'F';
}
*/