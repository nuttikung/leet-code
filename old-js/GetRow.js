/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) {
        return [1]
    }
    return [0, ...getRow(rowIndex - 1), 0].map((value, index, self) => value + (self[index + 1] || 0)).filter(value => value != 0)
};

let start = Date.now();
// T1 rowIndex = 3
console.log(getRow(3))
// T2 rowIndex = 0
console.log(getRow(0))
// T3 rowIndex = 1
console.log(getRow(1))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);