/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) {
        return [[1]]
    }
    const result = []
    let start = [1]
    result.push(start)
    for (let i = 2; i <= numRows; i++) {
        start = [0, ...start, 0].map((value, index, self) => value + (self[index + 1] || 0)).filter((value) => value !== 0)
        result.push(start)
    }
    return result
};

let start = Date.now();
// T1 n = 1
generate(1)
// T2 n = 5
generate(5)
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);