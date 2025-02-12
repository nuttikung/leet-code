const isClosedIsland = (grid, i, j, row, col) => {
    if (grid[i][j] === 1 || grid[i][j] === -1) {
        return true
    }
    if (i === 0 || j === 0 || i === row - 1 || j === col - 1) {
        return false
    }
    grid[i][j] = -1
    let left = isClosedIsland(grid, i, j - 1, row, col)
    let right = isClosedIsland(grid, i, j + 1, row, col)
    let top = isClosedIsland(grid, i - 1, j, row, col)
    let bottom = isClosedIsland(grid, i + 1, j, row, col)
    return left && right && top & bottom
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    if (grid.length === 0) {
        return 0
    }
    let ans = 0
    const row = grid.length
    const column = grid[0].length
    for (let i = 1; i < row - 1; i++) {
        for (let j = 1; j < column - 1; j++) {
            if (grid[i][j] === 0) {
                // check is close island
                if (isClosedIsland(grid, i, j, row, column)) {
                    ans++
                }
            }

        }
    }
    return ans
};


// // TODO: Optimize due to time exceed
// let start = Date.now();
// // T1 grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
closedIsland([[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]])
// // T2 pattern = "abba", s = "dog cat cat fish"
// // console.log(wordPattern("abba", "dog cat cat fish"))
// // T3 pattern = "aaaa", s = "dog cat cat dog"
// // console.log(wordPattern("aaaa", "dog cat cat dog"))
// // T4 pattern = "abba", s = "dog dog dog dog" -> Problem
// // console.log(wordPattern("abba", "dog dog dog dog"))
// let timeTaken = Date.now() - start;
// console.log(`Total time taken : ${timeTaken} milliseconds`);
