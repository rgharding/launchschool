/*
[P]roblem  given an array of elements, using a binary search return the index of the item or a -1 if the item is not there.

- Binary search: is an array search, that tests the middle value of an array vs a search value. It the search value if greater that middle value, the first half of the array is discarded, if not the second half of the array is discarded, it does this until there is one item left, or that the middle array item is the search item.

input: array
output: number of index of search term OR -1

Rules: 
  -input array must be sorted
  -return -1 if search item is not present
  -return index of search item if found


[E]xamples

[1, 5, 7, 11, 23, 45, 65, 89, 102], 77;    // -1
[1, 5, 7, 11, 23, 45, 65, 89, 102], 89);   // 7


I/O: look good


[M]ental model intermission
  make functtion -> get inputArr -> make variable to hold new half -> make loop -> test whether middle value of input arr > or = to search term => set half that's not greater to newhalf -> keep doing this till newArr has 1 element OR middle element equals search element -> if middle or last element equal seach term, return the index search term appeared in inputArr / if not return -1
  
  
[D]ata Structure
  Array: yes
  Object: no
  Helper Function: no


[Algorithm]

  - Define a function declaration 'yellowPages' that has 2 parameters, 'searchItem' and 'arr'
    - Declare and initalize variable 'splitArr' to an empty arr;
    - define while loop
      - find the middle element of 'arr'
      - test whether searchItem is greater or less or equal to middle item;
        - if greater than discard first half, is less that discard last half
            if equal, return index of searchItem in arr
        - set splitArr to the kept side;
        - if splitArr's length is 1 & searchItem does not equal it
            return -1

*/


function binarySearch(arr, searchItem) {
   
  
    let arrHalf = arr.slice();
    

    while (true) {
    
    let middleStart = Math.floor(arrHalf.length / 2)
    let middleEnd = Math.floor(arrHalf.length / 2) + 1
    let middleWord = arrHalf.slice(middleStart, middleEnd).shift()

     
      if (middleWord === searchItem) {
        return arr.indexOf(searchItem);
      } else if (arrHalf.length === 1) {
        return -1
      } 
        else if (middleWord > searchItem) {
        arrHalf = arrHalf.slice(0, middleStart );
       // middleWord = arrHalf.slice(middleStart, middleEnd).shift()
        
      } 
        else if (middleWord < searchItem) {
        arrHalf = arrHalf.slice(middleStart + 1 )
       // middleWord = arrHalf.slice(middleStart, middleEnd).shift()
        
      }
      

    }
      
    
  }

 let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
//binarySearch(yellowPages, 'Apple Store');                // 0
//
//binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
//binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
//binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1
//
//binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
//binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6//