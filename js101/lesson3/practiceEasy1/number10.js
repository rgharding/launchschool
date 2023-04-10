let advice = "Few things in life are as important as house training your pet dinosaur.";

let index = advice.search('house');
advice = advice.slice(0, index);
// Expected return value:
// => 'Few things in life are as important as '


console.log(advice);
