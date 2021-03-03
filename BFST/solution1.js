class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
		let queue = [];
		if (this) {
			queue.push(this);
		}
		while (queue.length > 0) {
			let node = queue.shift();
			array.push(node.name);
			for (let i = 0; i < node.children.length; i++) {
				queue.push(node.children[i])
			}
		}
		return array;
  }
}
