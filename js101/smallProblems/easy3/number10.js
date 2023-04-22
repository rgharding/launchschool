function century(year) {
	let century = Math.floor(year / 100) + 1
  let propCent;
  if (year % 100 === 0) {
  	century -= 1;
  }
	 	propCent = century + suffix(century);
  
}


function suffix(cent) {
	let strCent = String(cent)
  	console.log(strCent[strCent.length - 1]);
    }




century(2000);        // "20th"
century(2001);        // "21st" century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
