let randomNumber = Math.round(Math.random())



function checkNum(num) {
  if (num === 0) {
    console.log("It's zero");
  } else {
    console.log("It's one");
  }
}


checkNum(randomNumber);

function yesOrNo(number) {
  if (number) {
    console.log('Yes!');
  } else {
    console.log('No!');
  }
}
 
yesOrNo(randomNumber);
