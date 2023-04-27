let regex = /a-zA-Z0-9/i

function isRealPalindrome(string) {
	let revStr = string.split('').reverse().join();
  	if (string.match(regex) === revStr.match(regex) ) {
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
