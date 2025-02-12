/**
 * @param {number} n
 * @return {number}
 */

// Memo
const divide5Map = new Map()
const divide2Map = new Map()

const get5divide = (num) => {
    if (divide5Map.has(`${num}`)) {
        return divide5Map.get(`${num}`)
    } else if (num % 5 === 0) {
        return 1 + get5divide(num / 5)
    } else {
        return 0
    }
}

const get2Divide = (num) => {
    if (divide2Map.has(`${num}`)) {
        return divide2Map.get(`${num}`)
    } else if (num % 2 === 0) {
        return 1 + get2Divide(num / 2)
    } else {
        return 0
    }
}

var trailingZeroes = function (n) {
    let fiveCount = 0, twoCount = 0
    for (i = 1; i <= n; i++) {
        const result2divide = get2Divide(i)
        const result5divide = get5divide(i)
        divide2Map.set(`${i}`, result2divide)
        divide5Map.set(`${i}`, result5divide)
        fiveCount += result5divide
        twoCount += result2divide
    }
    return fiveCount < twoCount ? fiveCount : twoCount
};

console.log(trailingZeroes(30))
