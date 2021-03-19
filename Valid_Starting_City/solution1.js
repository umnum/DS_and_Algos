function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
	for (let i = 0; i < distances.length; i++) {
		if (fuel[i] === 0) continue;
		
		for (let j = 0, miles = 0; j < distances.length; j++) {
			let currentIndex = (j+i) % distances.length;
			miles += fuel[currentIndex]*mpg;
			miles -= distances[currentIndex];
			if (miles < 0) break;
			if (j === distances.length - 1) return i;
		}
	}
  return -1;
}
