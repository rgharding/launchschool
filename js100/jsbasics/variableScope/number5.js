/* This will throw a reference error. The a that is declared in the if block will shadow the a that is declared on line two. 
Therefore the console.log(a) on line 5 will look for the a that is declared in its scope. 
Since this a is declared after it is being called, a reference error will appear.
*/
