/*
[P]roblem: given a string, return an object that contains the percentatge of uppprcase, lowercase and neither charatters

I/O: 
string
object

Rules: 
  - return value will be an array
  - charaters are seperated by alpha and everything else
  - alpha charaters are further seperated by upper and lowercase.


Question: 
  - are spaces considered charaters?



[E]xmples
I?O: Looks good
Question: 
 - spaces are counted


[M]ental Model
  --> loop thur each charater --> create an object to keep track of chars --> 
  determine if char is alpah or not --> if char is alpha detrmine if it is upper or lowercase --> 
  --> add to the count of obj based what charater is --> return obj
  

[D]ata Structure
- Define a function 'letterPercentages' that has 1 parameter 'str' 
  - declare and initalize variable 'charCount' to an object that has 3 key/val pairs set to 0;
  keys are, uppper, lower, neither

- decleare and initalize variable 'regex' that test for alpha chars upper and lowercase  

define a loop that loops thur each charater of 'str'
  - define an if statement that test char agaisn reges
    - define a terany statement
      - char === char[uppercase] - 
        - objCount.upper + 1 
        - else objCount.lower + 1
  - else
    - 'objcount'[neither] + 1

  - define a loop that loops thru the keys of 'objCount'
      reassing the value of each key, to its current value / str.length 
        - limit the amount to 2 decimal places;
        - if needed convert amoutn to A string
  
  
  - return 'objCount'
*/


function letterPercentages(str) {
  let regex = /[a-z]/i
  let length = str.length; 

  let objCount = {
    lower: 0,
    upper: 0,
    neither: 0,
  }

  for (let char of str) {
    if (regex.test(char)) {
      char === char.toUpperCase() ? objCount.upper += 1 : objCount.lower += 1 
    } else {
      objCount.neither += 1
    }
  }


    objCount = getPercents(objCount, length)
 

    return objCount;
}

function getPercents(obj, length) {
  let objKeys = Object.keys(obj);

  objKeys.forEach(key => {
    obj[key] =  ((obj[key] / length) * 100).toFixed(2);
  });
   return obj  
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }