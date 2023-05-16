// UFT Wrtie function that determines the UTF-16 string value. 

function utf16Value(string) {
  let indexValuesArray = []
  for (let index = 0; index < string.length; index += 1) {
    indexValuesArray.push(string.charCodeAt(index));
  }
  
  let result = indexValuesArray.reduce( (acc, cv) => {
    return acc = acc + cv;
  }, 0);
  return result;
}



console.log(utf16Value('Four score'));  // 984
console.log(utf16Value('Launch School')); //1251
console.log(utf16Value('a')); // 97
console.log(utf16Value('')); // 0