function getGrade(...grades) {
  let avg = grades.reduce((acc, cv) => {
    return acc + cv
  }, 0) / grades.length

  let score = ''


  if (avg <=100 && avg >= 90) {
    score = 'A';
  } else if (avg < 90 && avg >= 80) {
    score = 'B'; 
  } else if (avg < 80 && avg >= 70) {
    score = 'C';
  } else if (avg < 70 && avg >= 60) {
    score = 'D';
  } else if (avg < 60 ){
    score = 'F'
  }

  return score;
}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"