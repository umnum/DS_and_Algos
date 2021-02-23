function findKthLargestValueInBst(tree, k, treeHash = {count: 0, lastVisited: -1}) {
  // Write your code here.
	if (tree === null || treeHash.count > k) return;
	
	findKthLargestValueInBst(tree.right, k, treeHash);
	if (treeHash.count < k) {
		treeHash.count++;
		console.log(treeHash.count)
		treeHash.lastVisited = tree.value;
		console.log(treeHash.lastVisited)
		findKthLargestValueInBst(tree.left, k, treeHash);
	}
  return treeHash.lastVisited;
}
