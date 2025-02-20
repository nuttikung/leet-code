

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
    // Making a graph
    const Graph = new Map()
    // Key Value e.g. 0 => a, 1 => b
    const Color = new Map()
    // color is represent to vertex 
    const vertex = colors.split("")
    let isCycle = false
    // Add vertex
    vertex.forEach((value, index) => {
        Graph.set(index, [])
        Color.set(index, value)
    })
    // Add edge
    edges.forEach(([start, end], index) => {
        if (start === end) {
            isCycle = true
            return
        } else {
            Graph.set(start, Graph.get(start).concat(end))
        }
    })
    // cycle graph must return -1
    if (isCycle) {
        return -1
    }
    // TODO: Implement all possible Path.
    const startArray = []
    Graph.forEach((value = [], key) => {
        if (value.length > 0) {
            startArray.push(key)
        }
    });
    // prepare function bfs
    const visit = (start, end) => {
        // prepare path for return
        const paths = []
        const current = start[start.length - 1]
        const neighbors = Graph.get(current)
        if (current === end) {
            return [start]
        } else if (neighbors.length === 0) {
            return [start]
        } else {
            neighbors.forEach((next) => {
                if (!start.includes(next)) {
                    paths.push(...visit(start.concat(next), end))
                }
            })
        }
        return paths
    }
    // Finding all routes from start to end cartesian size.
    let result = []
    for (let i = 0; i < vertex.length; i++) {
        const element = i
        for (let j = 0; j < vertex.length; j++) {
            const pointer = j
            if (element !== pointer) {
                const routes = visit([element], pointer).filter((record) => record[record.length - 1] === pointer)
                if (routes.length > 0) {
                    routes.forEach(element => {
                        result.push(element)
                    });
                }
            }
        }
    }
    let total = []
    result.forEach(route => {
        let count = {}
        route.forEach(element => {
            if (count[Color.get(element)] === undefined) {
                count[Color.get(element)] = 1
            } else {
                count[Color.get(element)]++
            }
        });
        total = [...new Set([...total, ...Object.values(count)])]
        console.log(route, count, total)
    });
    let max = 1
    total.forEach(element => {
        if (element > max) {
            max = element
        }
    });
    return max
};



let start = Date.now();
// T1 colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
console.log(largestPathValue("abaca", [[0, 1], [0, 2], [2, 3], [3, 4]]))
// T2 colors = "a", edges = [[0,0]]
console.log(largestPathValue("a", [[0, 0]]))
// T3 colors = "g", edges = []
console.log(largestPathValue("g", []))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);