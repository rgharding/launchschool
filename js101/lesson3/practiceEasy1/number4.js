let munDesc = "the Munsters are CREEPY and Spooky.";

let corrected = munDesc.toLowerCase()
corrected = corrected.slice(0, 1).toUpperCase() + corrected.slice(1, corrected.length - 1)


console.log(corrected)
// => The munsters are creepy and spooky

let properCase = munDesc[0].toUpperCase() + 
                  munDesc.slice(1).toLowerCase();
console.log(properCase);

let ex = munDesc.charAt(0).toUpperCase() + munDesc.substring(1).toLowerCase();

console.log(ex)
