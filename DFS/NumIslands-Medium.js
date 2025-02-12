/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const visited = new Map()
    let count = 0

    const dfs = (g, r, c, mr, mc) => {
        visited.set(`${r}-${c}`, true)
        g[r][c] = '-1'
        if (r - 1 >= 0 && g[r - 1][c] === "1" && visited.get(`${r - 1}-${c}`) === undefined) {
            dfs(g, r - 1, c, mr, mc)
        }
        if (c - 1 >= 0 && g[r][c - 1] === "1" && visited.get(`${r}-${c - 1}`) === undefined) {
            dfs(g, r, c - 1, mr, mc)
        }
        if (r + 1 <= mr && g[r + 1][c] === "1" && visited.get(`${r + 1}-${c}`) === undefined) {
            dfs(g, r + 1, c, mr, mc)
        }
        if (c + 1 <= mc && g[r][c + 1] === "1" && visited.get(`${r}-${c + 1}`) === undefined) {
            dfs(g, r, c + 1, mr, mc)
        }
    }
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "1") {
                visited.set(`${row}-${col}`, true)
                count++
                grid[row][col] = '-1'
                // mark as visited and change next direction
                if (row - 1 >= 0 && grid[row - 1][col] === "1") {
                    dfs(grid, row - 1, col, grid.length - 1, grid[row].length - 1)
                }
                if (col - 1 >= 0 && grid[row][col - 1] === "1") {
                    dfs(grid, row, col - 1, grid.length - 1, grid[row].length - 1)
                }
                if (row + 1 <= grid.length - 1 && grid[row + 1][col] === "1") {
                    dfs(grid, row + 1, col, grid.length - 1, grid[row].length - 1)
                }
                if (col + 1 <= grid[row].length - 1 && grid[row][col + 1] === "1") {
                    dfs(grid, row, col + 1, grid.length - 1, grid[row].length - 1)
                }
            }
        }
    }
    return count
};

let start = Date.now();
/**
 * T1 grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
*/

numIslands(
    [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ]
)
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);