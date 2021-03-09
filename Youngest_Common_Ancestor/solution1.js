function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  let visited = {};
  visited[descendantOne.name] = true;
  visited[descendantTwo.name] = true;
  if (visited[topAncestor.name]) return topAncestor;
  let node1 = descendantOne;
  let node2 = descendantTwo;
  while (node1.ancestor && !visited[node1.ancestor.name]) {
  node1 = node1.ancestor;
    visited[node1.name] = true;
  }
  if (node1.ancestor && node1.ancestor.name === descendantTwo.name) {
    return node1.ancestor;
  }
  while (node2.ancestor && !visited[node2.ancestor.name]) {
    node2 = node2.ancestor;
    visited[node2.name] = true;
  }
  return node2.ancestor;
}
