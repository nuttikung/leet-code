/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    const visited = new Map()
    const size = mat.length
    let sum = 0
    // From TOP LEFT -> BOTTOM RIGHT
    for (let i = 0; i < size; i++) {
        if (!visited.has(`${i}-${i}`)) {
            sum += mat[i][i]
            visited.set(`${i}-${i}`, true)
        }
    }
    for (let i = size - 1; i >= 0; i--) {
        if (!visited.has(`${i}-${(size - 1) - i}`)) {
            sum += mat[i][(size - 1) - i]
            visited.set(`${i}-${(size - 1) - i}`, true)
        }
    }
    return sum
};

let start = Date.now();
// T1 nums = [1,2,1,3,2,5]
console.log(
    diagonalSum(
        [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]
    )
)
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);