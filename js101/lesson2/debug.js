/*
Debugger tool:

- node inspect 'file name'
- 'n' moves to the next line of code
- 'c' moves to any added 'debugger' statment in code, or to the end of the code. If debugger statement is put into a loop, it will loop back to debugger statement.   

*/

let counter = 1;

while (counter < 5) {
    console.log(counter);
    debugger;
    counter += 1;
}