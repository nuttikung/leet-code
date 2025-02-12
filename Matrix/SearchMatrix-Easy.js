/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    console.table(matrix)
    const maxRow = matrix.length - 1
    const maxCol = matrix[0].length - 1
    const visit = new Set()
    let ans = false
    const dfs = (x, y) => {
        visit.add(`x-${x}-y-${y}`)
        if (matrix[y][x] === target) {
            ans = true
        }
        if (x + 1 <= maxCol && !visit.has(`x-${x + 1}-y-${y}`)) {
            if (matrix[y][x + 1] <= target) {
                dfs(x + 1, y)
            }
        }
        if (y + 1 <= maxRow && !visit.has(`x-${x}-y-${y + 1}`)) {
            if (matrix[y + 1][x] <= target) {
                dfs(x, y + 1)
            }
        }
    }
    dfs(0, 0)
    return ans
};

let start = Date.now();
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 90))
console.log(searchMatrix([[1, 3]], 3))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);