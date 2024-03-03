function century(year) {
  let yearStr = String(year);
  
  let century = getCentury(yearStr);
  let prefix = getPrefix(century);

  return `${century}${prefix}`
}


function getPrefix(years) {
  let prefix = '' 
  let lastTwo = years.slice(years.length - 2)
  if (lastTwo === '11' || lastTwo == '12' || lastTwo === '13' ) {
      prefix = 'th';
      return prefix;
  
    } else  {
  
      let lastDigit = years.slice(years.length - 1);

      switch (lastDigit) {
        case '1': 
          prefix = 'st';
          break;

        case '2':
          prefix = 'nd';
          break;

        case '3':
          prefix = 'rd';
          break;

        default:
          prefix = 'th';
  }

  }
  


  return prefix;
}




function getCentury(year) {
  if (year.length <= 2) {
    return '1';
  }
  
  let lastTwo = year.slice(year.length - 2);
  let withOutLastTwo = year.slice(0, year.length - 2);
  
  
  if (lastTwo === '00') {
    
    return withOutLastTwo;
  } else {
    let yearWithOutLastTwo = parseInt(withOutLastTwo) + 1
    
    return String(yearWithOutLastTwo);
  }
  
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th")
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"