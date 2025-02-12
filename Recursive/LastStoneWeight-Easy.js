/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    if (stones.length === 0) {
        return 0
    } else if (stones.length === 1) {
        return stones
    } else {
        let temp = stones.sort((a, b) => b - a)
        const max1 = temp.shift()
        const max2 = temp.shift()
        if (max1 - max2 > 0) {
            return lastStoneWeight([...temp, max1 - max2])
        }
        return lastStoneWeight(temp)
    }
};

let start = Date.now();
// T1 stones = [2,7,4,1,8,1]
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
// T2 stones = [100]
console.log(lastStoneWeight([100]))
// T3 stones = [100,100]
console.log(lastStoneWeight([100, 100]))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);



