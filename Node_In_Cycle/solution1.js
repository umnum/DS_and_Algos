function cycleInGraph(edges) {
  // Write your code here.
	let nodeStack = new Array(edges.length).fill(false);
	let visitedNodes = new Array(edges.length).fill(false);
	for (let vertex = 0; vertex < edges.length; vertex++) {
		if (isCycle(vertex, edges, nodeStack, visitedNodes)) return true;
	}
  return false;
}

function isCycle(currentNode, edges, nodeStack, visitedNodes) {
	visitedNodes[currentNode] = true;
	nodeStack[currentNode] = true;
	const neighbors = edges[currentNode];
	for (let i = 0; i < neighbors.length; i++) {
		if (!nodeStack[neighbors[i]]){
			if (isCycle(neighbors[i], edges, nodeStack, visitedNodes)) return true;
		}
		else if(nodeStack[neighbors[i]]) {
			return true;
		}
	}
	nodeStack[currentNode] = false;
	return false
}
