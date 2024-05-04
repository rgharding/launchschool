function swapCase(str) {
  let swapped = '';

  for (let letter of str) {
    if (letter === letter.toUpperCase()) {
      swapped += letter.toLowerCase();
    } else if (letter === letter.toLowerCase()) {
      swapped += (letter.toUpperCase()); 
    } else {
      swapped += letter
    }
  }

  return swapped;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"