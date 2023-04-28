let regex = /[a-zA-Z0-9]/ig

function isRealPalindrome(string) {
	let revStr = string.split('').reverse().join().match(regex).join('').toLowerCase();
  	let stringReg = string.match(regex).join('').toLowerCase();
   //	console.log(revStr)
    //console.log(stringReg);
    
    if (stringReg == revStr) {
    	console.log(true);
    } else {
    	console.log(false);
    }
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
