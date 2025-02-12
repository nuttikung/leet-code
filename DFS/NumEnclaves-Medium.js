const fillVisitFromBorder = (grid, i, j, row, column) => {
    if (grid[i][j] === 1) {
        // set self = -2 when self is border if not skip? and check L,R,T,B
        grid[i][j] = -2
        // Left
        if (0 < j - 1) {
            if (grid[i][j - 1] === 1) {
                fillVisitFromBorder(grid, i, j - 1, row, column)
            }
        }
        // Right
        if (j + 1 < column) {
            if (grid[i][j + 1] === 1) {
                fillVisitFromBorder(grid, i, j + 1, row, column)
            }
        }
        // Top
        if (0 < i - 1) {
            if (grid[i - 1][j] === 1) {
                fillVisitFromBorder(grid, i - 1, j, row, column)
            }
        }
        // Bottom
        if (i + 1 < row) {
            if (grid[i + 1][j] === 1) {
                fillVisitFromBorder(grid, i + 1, j, row, column)
            }
        }
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    // console.log("---ORIGINAL---")
    // console.table(grid)
    // console.log("---END ORIGINAL---")
    if (grid.length === 0) {
        return 0
    }
    let ans = 0
    const row = grid.length
    const column = grid[0].length
    // visit all border
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i === 0 || j === 0 || i === row - 1 || j === column - 1) {
                // border = 1
                fillVisitFromBorder(grid, i, j, row, column)
            }
        }
    }

    grid.forEach(row => {
        row.forEach(column => {
            if (column === 1) {
                ans++
            }
        });
    });
    // console.table(grid)
    console.log(ans)
    return ans
}


// TODO: Optimize due to time exceed
let start = Date.now();
// T1 grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]])
// T2 grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// numEnclaves([[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]])
// T3 grid = [[0, 0, 1, 0, 0, 0, 1],[1, 0, 0, 0, 0, 0, 1],[1, 0, 1, 1, 1, 1, 0],[1, 0, 1, 1, 1, 1, 0],[1, 0, 0, 0, 0, 0, 0]]
// numEnclaves([[0, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 1, 0], [1, 0, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 0]])
// T4 grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 1, 1]])


let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);


// [

//     [0, 0, -2, 0, 0, 0, -2],
//     [-2, 0, 0, 0, 0, 0, -2],
//     [-2, 0, 1, 1, 1, 1, 0],
//     [-2, 0, 1, 1, 1, 1, 0],
//     [-2, 0, 0, 0, 0, 0, 0],

// ]