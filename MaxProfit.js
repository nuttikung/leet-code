/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const diff = []
    let max
    let min
    prices.map((value) => {
        if (max === undefined && min === undefined) {
            min = value
            max = value
        }
        if (value < min) {
            min = value
            max = value
        }
        if (value > max) {
            max = value
            diff.push(max - min)
        }
    })
    if (diff.length === 0) {
        return 0
    } else {
        return Math.max(...diff)
    }
};

let start = Date.now();
// T1 prices = [7,1,5,3,6,4]
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// T2 prices = [7,6,4,3,1]
console.log(maxProfit([7, 6, 4, 3, 1]))
// T3 prices = [2,4,1]
console.log(maxProfit([2, 4, 1]))
// T4 prices = [3,2,6,5,0,3]
console.log(maxProfit([3, 2, 6, 5, 0, 3]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);

