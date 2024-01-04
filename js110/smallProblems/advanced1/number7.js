function binarySearch(arr, searchTerm) {
  let low = 0;
  let high = arr.length - 1;



  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === searchTerm) {
      return mid;
    } else if (searchTerm < arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1;
    }

    
  }

  return - 1;
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
//binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6