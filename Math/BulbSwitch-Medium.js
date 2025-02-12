/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    let count = 0
    for (let i = 1; i * i <= n; i++) {
        count++
    };
    return count
}

let start = Date.now();
// T1 n = 3
console.log(bulbSwitch(3))
// T2 n = 0
console.log(bulbSwitch(0))
// T3 n = 1
console.log(bulbSwitch(1))
// T4 n = 99999999
console.log(bulbSwitch(99999999))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);