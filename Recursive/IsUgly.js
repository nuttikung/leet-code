/**
 * @param {number} n
 * @return {boolean}
 */
// TODO: Optimize
const memo = new Map()
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
var isUgly = function (n) {
    if (n === 0) {
        return false
    } else if (n === 1) {
        return true
    } else if (n === 2 || n === 3 || n === 5) {
        return true
    } else if (n % 2 === 0) {
        return isUgly(n / 2)
    } else if (n % 3 === 0) {
        return isUgly(n / 3)
    } else if (n % 5 === 0) {
        return isUgly(n / 5)
    } else {
        return false
    }
}

// T1: 6, expected = true
console.log(isUgly(6))
// T2: 1, expected = true
console.log(isUgly(1))
// T3: 14, expected = false
console.log(isUgly(14))
// T4: 20, expected = true
console.log(isUgly(20))
// T4: 70, expected = false
console.log(isUgly(70))
