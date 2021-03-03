function hasSingleCycle(array) {
  // Write your code here.
	let visited = {};
	// offset initial jumping point
	for (let j = 0; j < array.length; j++) {
		// initialize visited hash to 'no positions visited'
		for (let k = 0; k < array.length; k++) {
			visited[k] = false;
		}
		// if an indices is visited twice, return false
		for (let i = 0, index = j; i < array.length; i++) {
			if (visited[index]) return false;
			visited[index] = true;
			index += array[index];
			while (index < 0) index += array.length;
			if (index >= array.length) index %= array.length;
		}
	}
	return true;
}
