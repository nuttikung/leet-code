const memo = new Map()
const fact = (n) => {
    if (n === 1 || n === 0) {
        return 1
    }

    if (memo.get(n) !== undefined) {
        return memo.get(n)
    }
    const res = n * fact(n - 1)
    memo.set(n, res)
    return res
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    // [1,1,1,1,1,1] -> [1,1,1,1,2]
    let count = 0
    const start = new Array(n).fill(1)
    count += 1
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        start.shift()
        start.shift()
        start.push(2)
        count += (fact(start.length) / (fact(start.filter(val => val === 1).length) * fact(start.filter(val => val === 2).length)))
    }
    return count
};

let start = Date.now();
// T1 n = 2
console.log(climbStairs(4))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);