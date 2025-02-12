/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // Go direction with memoization
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const ans = []
    let currentDirection = direction.shift()
    const visited = new Map()
    const rowLength = matrix.length
    const columnLength = matrix[0].length
    let currentRow = 0
    let currentCol = 0
    ans.push(matrix[currentRow][currentCol])
    visited.set(`${currentRow}-${currentCol}`, true)
    while (visited.size !== rowLength * columnLength) {
        // Next 
        const [h, t] = currentDirection
        // Check if border or Visited to change path
        if (visited.has(`${currentRow + h}-${currentCol + t}`)) {
            direction.push(currentDirection)
            currentDirection = direction.shift()
        } else if (`${currentRow + h}-${currentCol + t}` === `0-${columnLength - 1}` || `${currentRow + h}-${currentCol + t}` === `${rowLength - 1}-0` || `${currentRow + h}-${currentCol + t}` === `${rowLength - 1}-${columnLength - 1}`) {
            visited.set(`${currentRow + h}-${currentCol + t}`, true)
            ans.push(matrix[currentRow + h][currentCol + t])
            currentRow = currentRow + h
            currentCol = currentCol + t
            direction.push(currentDirection)
            currentDirection = direction.shift()
        } else if (matrix[currentRow + h][currentCol + t] === undefined) {
            direction.push(currentDirection)
            currentDirection = direction.shift()
        } else {
            visited.set(`${currentRow + h}-${currentCol + t}`, true)
            ans.push(matrix[currentRow + h][currentCol + t])
            currentRow = currentRow + h
            currentCol = currentCol + t
        }
    }
    return ans
};

let start = Date.now();
// T1 matrix = [[1,2,3],[4,5,6],[7,8,9]]
spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// T2 matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
spiralOrder([[1], [5], [9]])
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);