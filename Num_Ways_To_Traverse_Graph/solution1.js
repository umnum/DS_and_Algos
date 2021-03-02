function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
	let numWays = 0;
	let queue = [[1,1]];
	let count = 0;
	while(queue.length > 0) {
		let pos = queue.shift();
		if (pos[0] === width && pos[1] === height) {
			numWays++;
		}
		else {
			if (pos[0] < width) {
				queue.push([pos[0] + 1,pos[1]]);
			}
			if (pos[1] < height) {
				queue.push([pos[0], pos[1] + 1]);
			}
		}
	}
  return numWays;
}
