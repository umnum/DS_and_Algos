function powerset(array) {
  // Write your code here.
	const subsets = [[]];
	for (const ele of array ){
		const length = subsets.length;
		for (let i = 0; j < length; i++) {
			subsets.push(subsets[j].concat(ele));
		}
	}
	return subsets;
}
