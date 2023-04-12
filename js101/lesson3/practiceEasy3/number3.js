let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // 'hello there';

/*
This will be variables as pointers.  `str1` is a primitive immutable value. So when `str2` assigns is assigned the value of string one, the variable pointer of `str2` points to a different spot in memory than `str1` points. `str1` and `str2` on line 2 point to two completly different places in memory, The value of the variables on line 2 is the same, but they are different values, and the two strings will opereate completly independent of each other.  
*/
