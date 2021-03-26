function getPermutations(array) {
  // Write your code here.
	if (array.length === 1) return [array];
	
	if (array.length === 2) return [[array[0],array[1]], [array[1],array[0]]];
	
	let perms = [];
	
	for (let i = 0; i < array.length; i++) {
		let ele = array[i];
		
		let currPerms = getPermutations(array.slice(0,i).concat(array.slice(i+1)))
		currPerms.forEach(arr => {arr.unshift(ele)})
		perms = perms.concat(currPerms);
	}
	return perms;
}
