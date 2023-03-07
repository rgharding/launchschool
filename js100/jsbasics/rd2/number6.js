 /*
The MDN page for Date lists two methods to get the year of a date.
What is the difference between the two methods and which one should you use?
*/


let today = new Date();

today.getYear(); // does not return full years. Returns current year minus 1900...  DEPRECATED  
today.getFullYear(); // returns the full year. This is the one we should use
