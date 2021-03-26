function powerset(array) {
  // Write your code here.
	const subsets = [[]];
	for (let i = 0; i < array.length; i++) {
		const length = subsets.length;
		for (let j = 0; j < length; j++) {
			subsets.push(subsets[j].concat(array[i]));
		}
	}
	return subsets;
}
