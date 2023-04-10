let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function hasName(nameToSearch) {
	let nameFound = false
  	for (let name in ages) {
    	if (name === nameToSearch) {
      	nameFound = true;
      }
    }
  
  return nameFound;
}

console.log(hasName("Herman"));

function findName(name) {
	return ages.hasOwnProperty(name);
}

console.log(findName('Spot'));
