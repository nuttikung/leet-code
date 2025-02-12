/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    if (graph.length === 1) {
        return true
    }
    const left = new Set()
    const right = new Set()
    let valid = true
    let startIndex = 0
    const myGraph = new Map()
    graph.forEach((connected, index) => {
        myGraph.set(index, connected)
    })
    const dfs = (current, direction, visited = []) => {
        visited = [...visited, current]
        if (direction === 'left') {
            left.add(current)
        } else {
            right.add(current)
        }
        const nextDirection = direction === 'left' ? 'right' : 'left'
        myGraph.get(current).filter((next) => visited.indexOf(next) === -1).forEach(element => {
            dfs(element, nextDirection, visited)
        });
    }
    for (let index = 0; index < graph.length; index++) {
        if (myGraph.get(index).length > 0) {
            startIndex = index
            break;
        }
    }
    dfs(startIndex, 'left')
    for (let index = 0; index < graph.length; index++) {
        if (left.has(index) && right.has(index)) {
            valid = false
            break;
        }
    }
    return valid
};

let start = Date.now();
console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]))
console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))
console.log(isBipartite([[], [2, 4, 6], [1, 4, 8, 9], [7, 8], [1, 2, 8, 9], [6, 9], [1, 5, 7, 8, 9], [3, 6, 9], [2, 3, 4, 6, 9], [2, 4, 5, 6, 7, 8]]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);