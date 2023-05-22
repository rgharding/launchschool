// => The munsters are creepy and spooky.
let str = "the Munsters are CREEPY and Spooky.";

let properCase = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

let proper2 = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

let proper3 = str.toLowerCase().split('')
proper3[0] = 'T'
proper3 = proper3.join('');


console.log(proper3);
//console.log(properCase, proper2)
