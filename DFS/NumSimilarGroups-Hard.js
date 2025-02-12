const diff = (str1 = '', str2 = '') => {
    if (str1 === '' && str2 === '') {
        return 0
    } else if (str1.charAt(0) === str2.charAt(0)) {
        return diff(str1.slice(1), str2.slice(1))
    } else {
        return 1 + diff(str1.slice(1), str2.slice(1))
    }
}

/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
    if (strs.length === 1) {
        return 1
    }
    // The graph
    const adjacencyList = new Map();
    // add node
    strs.forEach((value) => {
        adjacencyList.set(value, [])
    })
    let clone = [...strs]
    const edge = []
    clone.forEach((value) => {
        clone.filter((element) => value !== element && diff(value, element) <= 2).map((v) => {
            edge.push([value, v])
        })
    })
    edge.forEach(([src, dest]) => {
        adjacencyList.set(src, [...new Set([...adjacencyList.get(src), dest])])
        adjacencyList.set(dest, [...new Set([...adjacencyList.get(dest), src])])
    })
    const dfs = (node, collection = new Set()) => {
        collection.add(node)
        if (adjacencyList.get(node).length === 0) {
            return collection
        } else {
            const destinations = adjacencyList.get(node).filter(value => !collection.has(value))
            if (destinations.length === 0) {
                return collection
            } else {
                adjacencyList.get(node).forEach(element => {
                    if (!collection.has(element)) {
                        dfs(element, collection)
                    }
                });
                return collection
            }
        }
    }
    const ans = new Map()
    clone.forEach((node) => {
        if (ans.get([...dfs(node, new Set())].sort().join('-')) === undefined) {
            ans.set([...dfs(node, new Set())].sort().join('-'), true)
        }
    })
    // memory cleanup
    adjacencyList.clear()
    return ans.size
};


let start = Date.now();
// T1 strs = ["tars","rats","arts","star"]
console.log(numSimilarGroups(["tars", "rats", "arts", "star"]))
// T2 strs = ["omv","ovm"]
console.log(numSimilarGroups(["omv", "ovm"]))
// T3 strs = ["koqnn","knnqo","noqnk","nqkon"]
console.log(numSimilarGroups(["koqnn", "knnqo", "noqnk", "nqkon"]))
// T4 strs = ["nmiwx","mniwx","wminx","mnixw","xnmwi"]
console.log(numSimilarGroups(["nmiwx", "mniwx", "wminx", "mnixw", "xnmwi"]))
// T5 strs = ["kccomwcgcs","socgcmcwkc","sgckwcmcoc","coswcmcgkc","cowkccmsgc","cosgmccwkc","sgmkwcccoc","coswmccgkc","kowcccmsgc","kgcomwcccs"]
console.log(numSimilarGroups(["kccomwcgcs", "socgcmcwkc", "sgckwcmcoc", "coswcmcgkc", "cowkccmsgc", "cosgmccwkc", "sgmkwcccoc", "coswmccgkc", "kowcccmsgc", "kgcomwcccs"]))

let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);