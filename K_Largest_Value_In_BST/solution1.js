class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k, nodes = []) {
  // Write your code here.
	if (tree === null) return;
	findKthLargestValueInBst(tree.left, k, nodes);
	nodes.push(tree.value);
	findKthLargestValueInBst(tree.right, k, nodes);
	if (nodes.length < k) return -1;
	else return nodes[nodes.length - k];
}
