/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const visited = new Map()
    const paint = (image, row, col, color, maxRow, maxCol) => {
        visited.set(`${row}-${col}`, true)
        if (0 <= row - 1 && image[row][col] === image[row - 1][col] && visited.get(`${row - 1}-${col}`) !== true) {
            paint(image, row - 1, col, color, maxRow, maxCol)
        }
        if (0 <= col - 1 && image[row][col] === image[row][col - 1] && visited.get(`${row}-${col - 1}`) !== true) {
            paint(image, row, col - 1, color, maxRow, maxCol)
        }
        if (col + 1 <= maxCol && image[row][col] === image[row][col + 1] && visited.get(`${row}-${col + 1}`) !== true) {
            paint(image, row, col + 1, color, maxRow, maxCol)
        }
        if (row + 1 <= maxRow && image[row][col] === image[row + 1][col] && visited.get(`${row + 1}-${col}`) !== true) {
            paint(image, row + 1, col, color, maxRow, maxCol)
        }
        image[row][col] = color
    }
    for (let i = 0; i < image.length; i++) {
        const row = image[i];
        if (i === sr) {
            for (let j = 0; j < row.length; j++) {
                if (j === sc) {
                    const col = row[j];
                    // paint left, right, top, bottom and self.
                    // top
                    visited.set(`${i}-${j}`, true)
                    if (0 <= i - 1 && image[i - 1][j] === col) {
                        paint(image, i - 1, j, color, image.length - 1, row.length - 1)
                    }
                    // left
                    if (0 <= j - 1 && image[i][j - 1] === col) {
                        paint(image, i, j - 1, color, image.length - 1, row.length - 1)
                    }
                    // right
                    if (j + 1 < row.length && image[i][j + 1] === col) {
                        paint(image, i, j + 1, color, image.length - 1, row.length - 1)
                    }
                    // bottom
                    if (i + 1 < image.length && image[i + 1][j] === col) {
                        paint(image, i + 1, j, color, image.length - 1, row.length - 1)
                    }
                    image[i][j] = color
                }
            }
        }
    }
    return image
};

let start = Date.now();
// T1 image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);