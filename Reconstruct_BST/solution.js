function reconstructBst(preOrderTraversalValues, index = 0, tree = null) {
  // Write your code here.
  return helper(-Infinity, Infinity, preOrderTraversalValues);
}

function helper(left, right, array, current = {root: 0}) {
	if (current.root === array.length) return null;
	
	const root = array[current.root];
	if (root < left || root >= right) return null;
	
	current.root++;
	const leftTree = helper(left, root, array, current);
	const rightTree = helper(root, right, array, current);
	return new BST(root, leftTree, rightTree);
}
