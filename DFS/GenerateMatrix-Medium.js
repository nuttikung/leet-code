/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n === 1) {
        return [[1]]
    }
    // Go direction with memoization
    let matrix = Array.from(Array(n), () => new Array(n))
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let currentDirection = direction.shift()
    let count = 1
    const visited = new Map()
    let currentRow = 0
    let currentCol = 0
    matrix[currentRow][currentCol] = count
    visited.set(`${currentRow}-${currentCol}`, true)
    count += 1
    while (visited.size !== Math.pow(n, 2)) {
        // Next 
        const [h, t] = currentDirection
        // Check if border or Visited to change path
        if (visited.has(`${currentRow + h}-${currentCol + t}`)) {
            direction.push(currentDirection)
            currentDirection = direction.shift()
        } else if (`${currentRow + h}-${currentCol + t}` === `0-${n - 1}` || `${currentRow + h}-${currentCol + t}` === `${n - 1}-0` || `${currentRow + h}-${currentCol + t}` === `${n - 1}-${n - 1}`) {
            visited.set(`${currentRow + h}-${currentCol + t}`, true)
            matrix[currentRow + h][currentCol + t] = count
            count += 1
            currentRow = currentRow + h
            currentCol = currentCol + t
            direction.push(currentDirection)
            currentDirection = direction.shift()
        } else {
            visited.set(`${currentRow + h}-${currentCol + t}`, true)
            matrix[currentRow + h][currentCol + t] = count
            count += 1
            currentRow = currentRow + h
            currentCol = currentCol + t
        }
    }
    return matrix
};

let start = Date.now();
// T1 n = 3
console.log(generateMatrix(3))
console.log(generateMatrix(5))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);