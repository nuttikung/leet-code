/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    /**
     *  Concept
     *  (0,0)  (0,1)  (0,2)
     *  (1,0)  (1,1)  (1,2)
     *  (2,0)  (2,1)  (2,2)
     *  Found at 0,0 can go 0,1 or 1,0 with next char right? actually if found at 1,1 can go 4 direction left,top,right,bottom
     */
    // prepare result after dfs
    let result = false
    // visited.push('0-0-A') i-j-char
    const wordSearch = (board, search, visited = new Set(), i, j, maxRow, maxCol) => {
        const [h, ...t] = search
        if (h === board[i][j]) {
            if (t.length === 0) {
                result = true
                return
            }
            // direction left,top,right,bottom
            if (!visited.has(`${i - 1}-${j}`) && i - 1 >= 0 && t[0] === board[i - 1][j]) {
                wordSearch(board, t, new Set(...[visited.add(`${i}-${j}`)]), i - 1, j, maxRow, maxCol)
            }
            if (!visited.has(`${i}-${j + 1}`) && j + 1 <= maxCol - 1 && t[0] === board[i][j + 1]) {
                wordSearch(board, t, new Set(...[visited.add(`${i}-${j}`)]), i, j + 1, maxRow, maxCol)
            }
            if (!visited.has(`${i + 1}-${j}`) && i + 1 <= maxRow - 1 && t[0] === board[i + 1][j]) {
                wordSearch(board, t, new Set(...[visited.add(`${i}-${j}`)]), i + 1, j, maxRow, maxCol)
            }
            if (!visited.has(`${i}-${j - 1}`) && j - 1 >= 0 && t[0] === board[i][j - 1]) {
                wordSearch(board, t, new Set(...[visited.add(`${i}-${j}`)]), i, j - 1, maxRow, maxCol)
            }
        }
    }
    // initialize
    const wordMap = (wr) => {
        const [h, ...t] = wr
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let j = 0; j < row.length; j++) {
                const column = row[j];
                if (column === h) {
                    if (t.length === 0) {
                        result = true
                        return
                    }
                    // direction left,top,right,bottom
                    // left
                    if (i - 1 >= 0) {
                        wordSearch(board, t, new Set().add(`${i}-${j}`), i - 1, j, board.length, row.length)
                    }
                    // right
                    if (i + 1 <= board.length - 1) {
                        wordSearch(board, t, new Set().add(`${i}-${j}`), i + 1, j, board.length, row.length)
                    }
                    // top
                    if (j - 1 >= 0) {
                        wordSearch(board, t, new Set().add(`${i}-${j}`), i, j - 1, board.length, row.length)
                    }
                    // bottom
                    if (j + 1 <= row.length - 1) {
                        wordSearch(board, t, new Set().add(`${i}-${j}`), i, j + 1, board.length, row.length)
                    }
                }
            }
        }
    }
    wordMap(word)
    if (result) {
        return result
    }
    wordMap(word.split('').reverse())
    return result
};

let start = Date.now();
// T1 board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))
// T2 board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"))
// T3 board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"))
// T4 board = [["a"]], word = "a"
console.log(exist([["a"]], "a"))
// T5 board = [["a","a"]], word = "aa"
console.log(exist([["a", "a"]], "aa"))
// T6 board = [["a", "b"]], word = "ba"
console.log(exist([["a", "b"]], "ba"))
// T7 board = [["a","b"],["c","d"]], word = "acdb"
console.log(exist([["a", "b"], ["c", "d"]], "acdb"))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);