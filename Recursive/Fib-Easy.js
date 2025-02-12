const memo = new Map()
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    if (memo.get(n) !== undefined) {
        return memo.get(n)
    }
    const res = fib(n - 1) + fib(n - 2)
    memo.set(n, res)
    return res
};

let start = Date.now();
// T1 n = 2
console.log(fib(2))
// T2 n =50
console.log(fib(50))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);