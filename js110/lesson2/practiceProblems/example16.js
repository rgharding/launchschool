//Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

function capitalized(arr) {
  let punctuate = [];
  
  for (let word of arr) {
    let newWord = word.slice(0, 1).toUpperCase() + word.slice(1);
    punctuate.push(newWord);
   }
   return (punctuate)
}



let result = [];


for (let key in obj) {
  if (obj[key]['type'] === 'fruit') {
    let colorArr = obj[key]['colors'];

      result.push(capitalized(colorArr));
  }

  if (obj[key]['type'] === 'vegetable') {
    let sizeString = obj[key]['size'].toUpperCase()
    
    result.push(sizeString);
    
  }

}

console.log(result);