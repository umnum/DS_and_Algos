class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
	if (node.right != null) return findMin(node.right);
	return findRightParent(node);
  return null;
}

function findMin(tree) {
	let node = tree;
	while (node.left) node = node.left;
	return node;
}

function findRightParent(tree) {
	let node = tree;
	while (node.parent !== null && node.parent.right === node) {
		node = node.parent;
	}
	return node.parent;
}
