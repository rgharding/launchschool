function getAvg(nums) {
  let totalScore = nums.reduce((acc, cv) => {
   return acc += cv;
    
  }, 0);
  return totalScore / nums.length
}


function getGrades(...scores) {
  let avg = getAvg(scores);
  let result = ''
  
  if (avg >= 90 && avg <= 100) {
    result = `${avg}:  'A'`;
  } else if(avg >= 80 && avg < 90) {
    result = `${avg}:  'B'`;
  } else if(avg >= 70 && avg < 80) {
    result = `${avg}:  'C'`;
  } else if (avg >= 60 && avg < 70) {
    result = `${avg}:  'D'`;
  } else if (avg >= 0 && avg < 60) {
    result = `${avg}:  'F'`;
  }

  return  result;
}

console.log(getGrades(95, 95, 98, 91)); // 