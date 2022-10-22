// What is the return value of map in the following code? Why?

let x = ['ant', 'bear'].map((element) => {
  if (element.length > 3) {
    return element;
  }
});

console.log(x);

/*
This map method being called. Map returns a value for every element in the calling array. In our example, the calling methods elements are being passed to a callback function. The callback function is testing wheter the elements length is greater than 3. If it is, then the element is returned to the outer function/ method call map. In out example the first element has a falsy value from the if statemet. There for the return value of the callback function for the first element is undefined as it has no explicit return value, it implicity returns undefined. The second value passed to the callback function is truthy in the if statement so the value of that element is returned to the outer method map. [undefined, bear] 
*/