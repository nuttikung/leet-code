/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    const rowLength = matrix.length
    const columnLength = matrix[0].length
    if (rowLength === 1 || columnLength === 1) {
        return true
    }
    let valid = true
    // Concept (x,y) check with (x+1, y+1) should be except when x+1, y+1 is not in matrix
    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            if (i + 1 <= rowLength - 1 && j + 1 <= columnLength - 1) {
                if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                    valid = false
                    break;
                }
            }
        }
        // since we know cannot be ToeplitzMatrix so end process as fast as we can
        if (valid === false) {
            break;
        }
    }
    return valid
};

let start = Date.now();
// T1
console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]))
// T2 matrix = [[1,2],[2,2]]
console.log(isToeplitzMatrix([[1, 2], [2, 2]]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);