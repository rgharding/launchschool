function century(year) {
	let centuryNumber = Math.floor(year / 100) + 1;
  
  if (year % 100 === 0) {
  	centuryNumber -= 1;
  }
   console.log(centuryNumber + centurySuffix(centuryNumber));
}



function centurySuffix(centuryNumber) {
		if (catchWithTh(centuryNumber)) {
    	return 'th';
    }
    
    let lastDigit = centuryNumber % 10;
    switch (lastDigit) {
    	case 1: 
      	lastDigit = 'st';
        break;
      case 2:
      	lastDigit = 'nd';
        break;
      case 3: 
      	lastDigit = 'rd';
        break;
      default:
      	lastDigit = 'th';
     }
     return lastDigit;
}


function catchWithTh(lastTwo) {
	return lastTwo === 11 || lastTwo === 12 || lastTwo === 13
  	
}



century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th
