function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
* @param {Node} node
* @return {Node}
*/
var cloneGraph = function (node) {
  if (node === null) return null
  const graph = new Map()
  // queue for BFS
  const q = []
  // force start by first node
  q.push(node)
  graph.set(node, new Node(node.val))
  while (q.length > 0) {
    // First in First out
    const current = q.shift()
    // No Node in map create one
    for (const neighbor of current.neighbors) {
      // no neighbor in graph need create, otherwise ignore
      if (!graph.has(neighbor)) {
        graph.set(neighbor, new Node(neighbor.val))
        q.push(neighbor)
      }
      graph.get(current).neighbors.push(graph.get(neighbor))
    }
  }
  return graph.get(node)
};



let start = Date.now();
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);




