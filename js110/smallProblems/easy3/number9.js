// Write a function that appends the numeric century with the proper ending 'st', 'nd', 'rd', 'th'


function getCenturyNumber(year) {
  let yearAsString = String(year);
  let yearNumber;

  if (year < 100) {
    yearNumber = 1;
    return yearNumber
  }
  
  if (year < 1000 && year % 100 !== 0) {
    yearNumber = parseInt(yearAsString.slice(0, 1)) + 1;
    return yearNumber;
  } else if (year < 1000 && year % 100 == 0) {
    yearNumber = parseInt(yearAsString.slice(0, 1));
    return yearNumber
  }

  if (year >= 1000) {
    if (year % 100 === 0) {
      yearNumber = parseInt(yearAsString.slice(0, yearAsString.length - 2));
      return yearNumber
    } else {
       yearNumber = parseInt(yearAsString.slice(0, yearAsString.length - 2)) + 1
       return (yearNumber)
    }
  }
}


function getPrefix(inputYear) {
  let inputYearString = String(inputYear);
  let oddNumbers = ['11', '12', '13'];
  let stringLength = inputYearString.length;
  
  let lastDigits = inputYearString.slice(stringLength - 2);
  
  if (oddNumbers.includes(lastDigits)) {
    return inputYearString + 'th'
  } else {
    lastDigits = inputYearString.slice(stringLength - 1); 
  }

  switch(lastDigits) {
    case '1':
      return inputYearString + 'st';
      break;
    
    case '2':
      return inputYearString + 'nd';
      break;

    case '3':
      return inputYearString + 'rd';
      break;

    default: 
      return inputYearString + 'th';

  }

}



function century(year) {
  
  let centuryNumber = getCenturyNumber(year)
  let prefix = getPrefix(centuryNumber);

  console.log(prefix);
}




(century(2000));        // "20th"
(century(2001));        // "21st"
(century(1965));        // "20th"
(century(256));         // "3rd"
(century(5));           // "1st"
(century(10103));       // "102nd"
(century(1052));        // "11th"
(century(1127));        // "12th"
(century(11201));       // "113th"