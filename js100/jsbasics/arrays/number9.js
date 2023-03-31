let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
  
  
  
  function beenThere(arr, city) {
  	let beenBefore = false;
    arr.forEach( (place) => {
    	if (place === city) {
      	beenBefore = true;
      }
    });
    return beenBefore
  }
  
  console.log(beenThere(destinations, 'London'));
   console.log(beenThere(destinations, 'Orlando'));
