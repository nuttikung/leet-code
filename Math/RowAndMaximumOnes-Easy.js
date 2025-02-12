/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let ansIndex = 0
    let max = 0
    // es6
    mat.map((value, index) => {
        if (value.filter(v => v === 1).length > max) {
            max = value.filter(v => v === 1).length
            ansIndex = index
        }
        // as map will be [undefined, undefine, ...]
        return
    })
    return [ansIndex, max]
};

let start = Date.now();
// T1 mat = [[0,1],[1,0]]
rowAndMaximumOnes([[0, 1], [1, 0]])
// T2 mat = [[0,0,0],[0,1,1]]
rowAndMaximumOnes([[0, 0, 0], [0, 1, 1]])
// T3 mat = [[0,0],[1,1],[0,0]]
rowAndMaximumOnes([[0, 0], [1, 1], [0, 0]])
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);



