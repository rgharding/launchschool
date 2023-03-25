function compareByLength(str1, str2) {
   let result;
   if (str1.length < str2.length) {
	result = -1;
  } else if (str1.length > str2.length) {
	result = 1
}  else {
	result = 'They are same length';
}
	console.log(result);
}



compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
