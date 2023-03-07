/*
Run the following code.
You'll see that it raises an error:

TypeError: tweet.length is not a function

Check the documentation of both TypeError and length, in order to find out what causes the error.
*/


/*
let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}
*/

// Solution tweet.length    .length is a  String property not a method. It doesnt take the () at the end of it

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
} else {
  console.log('Tweet length is ok!')
}


