/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const graph = new Map()
    for (let i = 0; i < n; i++) {
        graph.set(i, [])
    }
    edges.forEach(([source, dest]) => {
        graph.get(source).push(dest)
        graph.get(dest).push(source)
    });
    let valid = false
    const dfs = (start, end, visited = new Set()) => {
        if (start === end) {
            valid = true
        }
        if (valid === true) {
            return
        } else {
            graph.get(start).filter((next) => !visited.has(next)).forEach((next) => dfs(next, end, visited.add(start)))
        }
    }
    dfs(destination, source, new Set())
    return valid
};

let start = Date.now();
validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2)

validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5)

let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);