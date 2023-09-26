// Write a function that acts as a grade book. Given values it will return a letter grade basaed on average.


function getAvg(numArray) {
  let numberOfGrades = numArray.length;

    let avg = numArray.reduce((acc, cv) => {
      return acc += cv;
    }, 0) / numberOfGrades;

    return avg;
}

function getLetterGrade(avg) {
  let letterGrade = '';
  
  if (90 <= avg && avg <= 100) {
    letterGrade = 'A';
  } else if( 80 <= avg && avg < 90 ) {
    letterGrade = 'B';
  } else if ( 70 <= avg && avg < 80) {
    letterGrade = 'C';
  } else if (60 <= avg && avg < 70) {
    letterGrade = 'D'; 
  } else if (0 <= avg && avg < 60) {
    letterGrade = 'F';
  }

  
  return letterGrade;
}




function getGrades(...grades) {
  let numbericalAverage = getAvg(grades);
  let finalGrade = getLetterGrade(numbericalAverage);

  console.log(`Your average is: ${numbericalAverage} Final Grade: ${finalGrade}`);
}


getGrades(100, 77, 87);