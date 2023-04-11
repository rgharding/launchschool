let title = "Flintstone Family Members";


let padlength = (40 - title.length) / 2;

title = title.padStart(padlength + title.length).padEnd(40);

console.log(title)
